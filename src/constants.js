// For this example, I'm going mobile-first.
const BREAKPOINTS = {
    tabletMin: 550,
    laptopMin: 1100,
    
  }
  
export const QUERIES = {
    'medium': `(min-width: ${BREAKPOINTS.tabletMin}px)`,
    'large': `(min-width: ${BREAKPOINTS.laptopMin}px)`,   
  }