import jsforce from "jsforce";
import { createClient } from "redis";

export type Sort = "ASC" | "DESC";

export interface Avviso {
  id: string | undefined;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  entePromotore: string;
  beneficiari: string[];
  plateaPotenziale: string;
  oggettoBando: string;
  url?: string;
  misura?: string;
}

/**
 * Recupera tutti gli avvisi in una lista di oggetti JSON.
 * @param n Il numero di avvisi da recuperare. Se 0, recupera tutti.
 * @param sort Specifica se ricevere i risultati ordinati per data ASC o DESC.
 * @param beneficiari Se specificato, filtra gli avvisi per i beneficiari indicati.
 * @param useCache Se true, utilizza la cache Redis (default: true).
 * @param cacheTTL Time to live della cache in secondi (default: 3600 = 1 ora).
 * @returns Tutti gli avvisi in formato JSON.
 */
export async function getAvvisi(
  n: number = 0,
  sort: Sort = "DESC",
  beneficiari?: string[],
  useCache: boolean = false,
  cacheTTL: number = 3600,
) {
  if (!process.env.SF_USERNAME || !process.env.SF_PASSWORD) {
    console.error("SF_USERNAME and SF_PASSWORD, must be defined.");
    return [];
  }

  // Inizializza Redis se non è già connesso
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let redis: any = null;
  if (useCache) {
    try {
      redis = createClient({ url: process.env.REDIS_URL });
      await redis.connect();
    } catch (error) {
      console.warn("Redis connection failed, proceeding without cache:", error);
      useCache = false;
    }
  }

  try {
    // Genera una chiave di cache basata sui parametri
    const cacheKey = `avvisi:${n}:${sort}:${beneficiari?.join(",") || "all"}`;

    // Prova a recuperare dalla cache
    if (useCache && redis) {
      try {
        const cachedData = await redis.get(cacheKey);
        if (cachedData) {
          console.log("Cache hit for key:", cacheKey);
          return JSON.parse(cachedData);
        }
      } catch (cacheError) {
        console.warn("Cache read error:", cacheError);
      }
    }

    console.log("Cache miss, fetching from Salesforce...");

    const conn =
      process.env.VERCEL_ENV === "production"
        ? new jsforce.Connection()
        : new jsforce.Connection({
            loginUrl: "https://test.salesforce.com",
          });

    // Utilizziamo process.env invece di Deno.env
    const username = process.env.SF_USERNAME || "";
    const password = process.env.SF_PASSWORD || "";

    await conn.login(username, password);

    const records = await conn
      .sobject("outfunds__Funding_Program__c")
      .find({})
      .autoFetch(true);

    const misure = records.filter(
      (r) => r.outfunds__Parent_Funding_Program__c === null,
    );

    let avvisi = records
      .filter((r) => r.outfunds__Parent_Funding_Program__c !== null)
      .map((r) => ({
        id: r.Id,
        name: r.Name,
        startDate: r.outfunds__Start_Date__c,
        endDate: r.outfunds__End_Date__c,
        status: r.outfunds__Status__c,
        entePromotore: r.Ente_promotore__c,
        fondiDisponibili: r.Fondi_disponibili__c,
        fondiDisponibili1: r.Fondi_disponibili_Padre_1__c,
        fondiDisponibili2: r.Fondi_disponibili_Padre_2__c,
        totalProgramAmount: r.outfunds__Total_Program_Amount__c,
        beneficiari: r.SOGGETTI_DESTINATARI__c?.split(";"),
        plateaPotenziale: r.Platea_potenziale__c,
        oggettoBando: r.Oggetto_Bando__c,
        url: `${process.env.SF_URL}?id=${r.Id}`,
        misura: misure.find(
          ({ Id }) => r.outfunds__Parent_Funding_Program__c === Id,
        )?.Name,
      }));

    // Filtra per beneficiari se specificati
    if (beneficiari && beneficiari.length > 0) {
      avvisi = avvisi.filter(
        (avviso) =>
          avviso.beneficiari &&
          avviso.beneficiari.some((b: string) =>
            beneficiari.some(
              (beneficiario) =>
                b.trim().toLowerCase() === beneficiario.trim().toLowerCase(),
            ),
          ),
      );
    }

    // Ordina gli avvisi per data (endDate)
    const sortedAvvisi = avvisi.sort((a, b) => {
      const dateA = new Date(a.endDate || "").getTime();
      const dateB = new Date(b.endDate || "").getTime();

      // Se sort è ASC, ordina in modo crescente, altrimenti in modo decrescente
      return sort === "ASC" ? dateA - dateB : dateB - dateA;
    });

    // Limita il numero di risultati a n
    const result = n > 0 ? sortedAvvisi.slice(0, n) : sortedAvvisi;

    // Salva nella cache
    if (useCache && redis) {
      try {
        await redis.set(cacheKey, JSON.stringify(result), { EX: cacheTTL });
        console.log("Data cached with key:", cacheKey, "TTL:", cacheTTL);
      } catch (cacheError) {
        console.warn("Cache write error:", cacheError);
      }
    }

    return result;
  } catch (error) {
    console.error(error);
    // Restituisci un array vuoto in caso di errore
    return [];
  } finally {
    // Chiudi la connessione Redis se aperta
    if (redis) {
      try {
        await redis.quit();
      } catch (error) {
        console.warn("Error closing Redis connection:", error);
      }
    }
  }
}

/**
 * Invalida la cache per tutti gli avvisi o per una chiave specifica
 * @param specificKey Chiave specifica da invalidare (opzionale)
 */
export async function invalidateAvvisiCache(specificKey?: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let redis: any = null;
  try {
    redis = createClient({ url: process.env.REDIS_URL });
    await redis.connect();

    if (specificKey) {
      // Invalida una chiave specifica
      await redis.del(specificKey);
      console.log("Cache invalidated for key:", specificKey);
    } else {
      // Invalida tutte le chiavi che iniziano con "avvisi:"
      const keys = await redis.keys("avvisi:*");
      if (keys.length > 0) {
        await redis.del(...keys);
        console.log("All avvisi cache invalidated. Keys removed:", keys.length);
      }
    }
  } catch (error) {
    console.error("Error invalidating cache:", error);
  } finally {
    if (redis) {
      try {
        await redis.quit();
      } catch (error) {
        console.warn("Error closing Redis connection:", error);
      }
    }
  }
}
