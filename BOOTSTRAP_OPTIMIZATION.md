# Ottimizzazioni Bootstrap Italia

Questo documento descrive le ottimizzazioni implementate per migliorare le performance e ridurre gli errori di idratazione nell'inizializzazione di Bootstrap Italia.

## Problemi risolti

### 1. Inizializzazione eccessiva

- **Prima**: Tutti i componenti Bootstrap venivano inizializzati su ogni elemento con `data-bs-toggle`, anche se non utilizzati
- **Dopo**: Inizializzazione selettiva solo degli elementi effettivamente presenti e non già inizializzati

### 2. Errori di idratazione

- **Prima**: Inizializzazione duplicata tra server e client
- **Dopo**: Verifica dell'esistenza di istanze prima dell'inizializzazione e gestione degli errori

### 3. Performance

- **Prima**: Caricamento sincrono e inizializzazione immediata
- **Dopo**: Caricamento lazy e debouncing delle inizializzazioni multiple

## Modifiche implementate

### 1. BootstrapInit.tsx ottimizzato

- Verifica dell'esistenza di istanze prima dell'inizializzazione
- Gestione degli errori con try-catch
- Osservatore per mutamenti del DOM per componenti dinamici
- Cleanup automatico delle istanze

### 2. Hook useBootstrap

- Hook personalizzato per gestione efficiente dei componenti Bootstrap
- Cleanup automatico quando i componenti vengono smontati
- Interfaccia type-safe per le opzioni

### 3. Configurazione centralizzata

- File `bootstrap-config.ts` con impostazioni di default
- Funzioni utility per verificare il caricamento di Bootstrap
- Debouncing per ottimizzare le performance

### 4. Caricamento script ottimizzato

- Strategia `lazyOnload` per il caricamento dello script
- Evento personalizzato `bootstrap-loaded` per sincronizzazione
- Gestione asincrona dell'inizializzazione

## Vantaggi

### Performance

- Riduzione del tempo di caricamento iniziale
- Inizializzazione lazy dei componenti
- Debouncing per evitare inizializzazioni multiple

### Stabilità

- Eliminazione degli errori di idratazione
- Gestione robusta degli errori
- Cleanup automatico delle risorse

### Manutenibilità

- Codice più pulito e organizzato
- Configurazione centralizzata
- Hook riutilizzabili

## Utilizzo

### Inizializzazione automatica

I componenti vengono inizializzati automaticamente dal `BootstrapInit` nel layout principale.

### Inizializzazione manuale

Per componenti specifici, utilizzare l'hook `useBootstrap`:

```tsx
import { useBootstrap } from "@/src/hooks/useBootstrap";

function MyComponent() {
  const { initComponent } = useBootstrap();

  useEffect(() => {
    const element = document.querySelector('[data-bs-toggle="tooltip"]');
    if (element) {
      initComponent(element, "tooltip", { placement: "top" });
    }
  }, [initComponent]);

  return <div>...</div>;
}
```

### Configurazione personalizzata

Modificare le impostazioni in `src/lib/bootstrap-config.ts`:

```typescript
export const BOOTSTRAP_CONFIG = {
  autoInit: {
    tooltip: true,
    popover: false, // Disabilita l'auto-inizializzazione dei popover
  },
  // ...
};
```

## Monitoraggio

Per verificare che le ottimizzazioni funzionino:

1. **Console del browser**: Non dovrebbero esserci errori di inizializzazione
2. **Lighthouse**: Miglioramento dei punteggi di performance
3. **React DevTools**: Riduzione dei re-render non necessari
4. **Network tab**: Caricamento più efficiente degli script

## Troubleshooting

### Componenti non inizializzati

1. Verificare che l'elemento abbia l'attributo `data-bs-toggle` corretto
2. Controllare che Bootstrap sia caricato (`isBootstrapLoaded()`)
3. Verificare che non ci siano errori nella console

### Errori di idratazione

1. Assicurarsi che i componenti siano renderizzati solo lato client
2. Utilizzare `useEffect` per l'inizializzazione
3. Verificare che non ci siano differenze tra server e client

### Performance ancora scarse

1. Verificare che il debouncing sia attivo
2. Controllare che non ci siano inizializzazioni duplicate
3. Utilizzare il lazy loading per componenti non critici
