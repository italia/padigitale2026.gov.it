// Configurazione per l'ottimizzazione di Bootstrap Italia

export const BOOTSTRAP_CONFIG = {
  // Componenti da inizializzare automaticamente
  autoInit: {
    tooltip: true,
    popover: true,
    collapse: true,
    sticky: true,
    navbarcollapsible: true,
  },
  
  // Opzioni di default per i componenti
  defaults: {
    tooltip: {
      animation: true,
      delay: { show: 500, hide: 100 },
      html: false,
      placement: 'top',
      selector: false,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: '',
      trigger: 'hover focus',
    },
    popover: {
      animation: true,
      container: false,
      content: '',
      delay: { show: 0, hide: 0 },
      html: false,
      placement: 'right',
      selector: false,
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      title: '',
      trigger: 'click',
    },
    collapse: {
      parent: null,
      toggle: true,
    },
  },
  
  // Performance settings
  performance: {
    // Debounce per le inizializzazioni multiple
    debounceMs: 100,
    // Timeout per l'attesa del caricamento di Bootstrap
    bootstrapTimeoutMs: 5000,
    // Abilita il lazy loading dei componenti
    lazyLoading: true,
  },
};

// Funzione per verificare se Bootstrap è caricato
export function isBootstrapLoaded(): boolean {
  return typeof window !== "undefined" && 
         typeof window.bootstrap !== "undefined" && 
         window.bootstrap !== null;
}

// Funzione per attendere il caricamento di Bootstrap
export function waitForBootstrap(timeoutMs: number = BOOTSTRAP_CONFIG.performance.bootstrapTimeoutMs): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isBootstrapLoaded()) {
      resolve();
      return;
    }

    const timeout = setTimeout(() => {
      reject(new Error('Bootstrap non caricato entro il timeout'));
    }, timeoutMs);

    const checkBootstrap = () => {
      if (isBootstrapLoaded()) {
        clearTimeout(timeout);
        resolve();
      } else {
        requestAnimationFrame(checkBootstrap);
      }
    };

    checkBootstrap();
  });
}

// Funzione per debounce
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
} 