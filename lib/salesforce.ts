import jsforce from "jsforce";

type Sort = "ASC" | "DESC";

/**
 * Recupera tutti gli avvisi in una lista di oggetti JSON.
 * @param n Il numero di avvisi da recuperare.
 * @param sort Specifica se ricevere i risultati ordinati per data ASC o DESC.
 * @param beneficiario Se specificato, filtra gli avvisi per il beneficiario indicato.
 * @returns Tutti gli avvisi in formato JSON.
 */
export async function getAvvisi(
  n: number = 3,
  sort: Sort = "DESC",
  beneficiario?: string
) {
  if (!process.env.SF_USERNAME || !process.env.SF_PASSWORD) {
    console.error("SF_USERNAME and SF_PASSWORD, must be defined.");
    return [];
  }

  const conn = new jsforce.Connection();

  // Utilizziamo process.env invece di Deno.env
  const username = process.env.SF_USERNAME || "";
  const password = process.env.SF_PASSWORD || "";
  try {
    await conn.login(username, password);

    const records = await conn
      .sobject("outfunds__Funding_Program__c")
      .find({})
      .autoFetch(true);

    const misure = records.filter(
      (r) => r.outfunds__Parent_Funding_Program__c === null
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
        misura: misure.find(
          ({ Id }) => r.outfunds__Parent_Funding_Program__c === Id
        )?.Name,
      }));

    // Filtra per beneficiario se specificato
    if (beneficiario) {
      avvisi = avvisi.filter(
        (avviso) =>
          avviso.beneficiari &&
          avviso.beneficiari.some(
            (b: string) =>
              b.trim().toLowerCase() === beneficiario.trim().toLowerCase()
          )
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
    return sortedAvvisi.slice(0, n);
  } catch (error) {
    console.error(error);
    // Restituisci un array vuoto in caso di errore
    return [];
  }
}
