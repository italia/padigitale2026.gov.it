import { useState, useEffect } from 'react';

// Breakpoint variables (stessi valori definiti in src/styles/_mq.scss)
const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  mb: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

type Breakpoint = keyof typeof BREAKPOINTS;

interface ViewportInfo {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  breakpoint: Breakpoint;
}

export function useViewport(): ViewportInfo {
  const [viewport, setViewport] = useState<ViewportInfo>({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    breakpoint: 'xs',
  });

  useEffect(() => {
    function updateViewport() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Determina il breakpoint corrente
      let breakpoint: Breakpoint = 'xs';
      if (width >= BREAKPOINTS.xxl) breakpoint = 'xxl';
      else if (width >= BREAKPOINTS.xl) breakpoint = 'xl';
      else if (width >= BREAKPOINTS.lg) breakpoint = 'lg';
      else if (width >= BREAKPOINTS.mb) breakpoint = 'mb';
      else if (width >= BREAKPOINTS.sm) breakpoint = 'sm';

      setViewport({
        width,
        height,
        isMobile: width < BREAKPOINTS.mb,
        isTablet: width >= BREAKPOINTS.mb && width < BREAKPOINTS.lg,
        isDesktop: width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl,
        isLargeDesktop: width >= BREAKPOINTS.xl,
        breakpoint,
      });
    }

    // Imposta i valori iniziali
    updateViewport();

    // Aggiungi listener per il resize
    window.addEventListener('resize', updateViewport);

    // Cleanup
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return viewport;
}

// Hook semplificato per controllare se siamo sopra un certo breakpoint
export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const { width } = useViewport();
  return width >= BREAKPOINTS[breakpoint];
} 