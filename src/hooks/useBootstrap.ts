"use client";

import { useEffect, useRef } from "react";

interface BootstrapInstance {
  dispose?: () => void;
  destroy?: () => void;
}

export function useBootstrap() {
  const instancesRef = useRef<BootstrapInstance[]>([]);

  const initComponent = (
    element: Element,
    componentType: 'tooltip' | 'popover' | 'collapse',
    options?: Record<string, unknown>
  ) => {
    if (typeof window === "undefined" || !window.bootstrap) {
      return null;
    }

    const bootstrap = window.bootstrap;
    
    try {
      // Verifica se il componente è già inizializzato
      let existingInstance: BootstrapInstance | null = null;
      
      switch (componentType) {
        case 'tooltip':
          existingInstance = bootstrap.Tooltip.getInstance(element);
          break;
        case 'popover':
          existingInstance = bootstrap.Popover.getInstance(element);
          break;
        case 'collapse':
          existingInstance = bootstrap.Collapse.getInstance(element);
          break;
      }

      if (existingInstance) {
        return existingInstance;
      }

      // Inizializza il nuovo componente
      let instance: BootstrapInstance;
      
      switch (componentType) {
        case 'tooltip':
          instance = new bootstrap.Tooltip(element, options);
          break;
        case 'popover':
          instance = new bootstrap.Popover(element, options);
          break;
        case 'collapse':
          instance = new bootstrap.Collapse(element, options);
          break;
        default:
          return null;
      }

      // Marca come inizializzato
      element.setAttribute('data-bs-initialized', 'true');
      
      // Aggiungi all'array delle istanze per il cleanup
      instancesRef.current.push(instance);
      
      return instance;
    } catch (error) {
      console.warn(`Errore nell'inizializzazione del ${componentType}:`, error);
      return null;
    }
  };

  const disposeComponent = (element: Element, componentType: 'tooltip' | 'popover' | 'collapse') => {
    if (typeof window === "undefined" || !window.bootstrap) {
      return;
    }

    const bootstrap = window.bootstrap;
    
    try {
      let instance: BootstrapInstance | null = null;
      
      switch (componentType) {
        case 'tooltip':
          instance = bootstrap.Tooltip.getInstance(element);
          break;
        case 'popover':
          instance = bootstrap.Popover.getInstance(element);
          break;
        case 'collapse':
          instance = bootstrap.Collapse.getInstance(element);
          break;
      }

      if (instance) {
        if (instance.dispose) {
          instance.dispose();
        } else if (instance.destroy) {
          instance.destroy();
        }
        element.removeAttribute('data-bs-initialized');
      }
    } catch (error) {
      console.warn(`Errore nella disinizializzazione del ${componentType}:`, error);
    }
  };

  // Cleanup automatico quando il componente viene smontato
  useEffect(() => {
    return () => {
      instancesRef.current.forEach(instance => {
        if (instance.dispose) {
          instance.dispose();
        } else if (instance.destroy) {
          instance.destroy();
        }
      });
      instancesRef.current = [];
    };
  }, []);

  return {
    initComponent,
    disposeComponent
  };
} 