/**
 * DRISHTI Peacock Theme Configuration
 *
 * Centralized theme configuration with peacock-inspired color palette.
 * Represents "Drishti" (vision/sight in Sanskrit) and connects with
 * the peacock's iconic eye feathers.
 */

// ============================================
// COLOR PALETTE
// ============================================

export const colors = {
  // PRIMARY BLUES (Peacock Neck)
  royal: {
    50: '#CAF0F8',
    100: '#ADE8F4',
    200: '#90E0EF',
    300: '#48CAE4',
    400: '#00B4D8',
    500: '#0096C7',
    600: '#0077B6', // Main Brand Color
    700: '#023E8A',
    800: '#03045E',
  },

  // PEACOCK TEALS
  peacock: {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#00BCD4',
    600: '#00ACC1',
    700: '#0097A7',
    800: '#00838F',
    900: '#006064',
  },

  // FEATHER GREENS (Iridescence)
  feather: {
    light: '#40916C',
    default: '#2D6A4F',
    dark: '#1B4332',
  },

  // GOLD ACCENTS (Feather Eye Spots)
  gold: {
    light: '#FFD60A',
    default: '#D4AF37',
    dark: '#B8860B',
  },

  bronze: '#CD7F32',

  // BACKGROUNDS
  midnight: '#0D1B2A',
  navy: '#1B263B',
  pearl: '#F8FAFC',
  softFeather: '#E0F2FE',
} as const

// ============================================
// GRADIENTS
// ============================================

export const gradients = {
  peacockHero: 'linear-gradient(135deg, #023E8A 0%, #0077B6 40%, #00B4D8 70%, #2D6A4F 100%)',
  royal: 'linear-gradient(135deg, #03045E 0%, #023E8A 50%, #0077B6 100%)',
  iridescent: 'linear-gradient(45deg, #0077B6, #00B4D8, #2D6A4F, #40916C, #0077B6)',
  goldShine: 'linear-gradient(90deg, #B8860B 0%, #D4AF37 50%, #FFD60A 100%)',
  darkHero: 'linear-gradient(180deg, #0D1B2A 0%, #1B263B 50%, #023E8A 100%)',
  royalSubtle: 'linear-gradient(to right, #0077B6, #00B4D8)',
  feather: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)',

  // Text gradients
  text: {
    peacock: 'linear-gradient(135deg, #0077B6, #00B4D8, #2D6A4F)',
    gold: 'linear-gradient(90deg, #B8860B, #D4AF37, #FFD60A)',
    royal: 'linear-gradient(135deg, #03045E, #023E8A, #0077B6)',
  },
} as const

// ============================================
// SHADOWS (Peacock-tinted)
// ============================================

export const shadows = {
  peacock: '0 4px 20px rgba(0, 119, 182, 0.15)',
  peacockLg: '0 10px 40px rgba(0, 119, 182, 0.2)',
  peacockXl: '0 20px 60px rgba(0, 119, 182, 0.25)',

  gold: '0 4px 20px rgba(212, 175, 55, 0.2)',
  goldLg: '0 8px 30px rgba(212, 175, 55, 0.3)',
  goldXl: '0 12px 40px rgba(212, 175, 55, 0.4)',

  dark: '0 4px 20px rgba(13, 27, 42, 0.3)',
  darkLg: '0 10px 40px rgba(13, 27, 42, 0.5)',
  darkXl: '0 20px 60px rgba(13, 27, 42, 0.7)',

  feather: '0 4px 20px rgba(45, 106, 79, 0.2)',
  featherLg: '0 8px 30px rgba(45, 106, 79, 0.3)',

  // Glow shadows
  glow: {
    royal: '0 0 20px rgba(0, 119, 182, 0.4), 0 0 40px rgba(0, 119, 182, 0.2)',
    royalIntense: '0 0 30px rgba(0, 119, 182, 0.6), 0 0 60px rgba(0, 119, 182, 0.3)',
    gold: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
    goldIntense: '0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.3)',
    feather: '0 0 20px rgba(45, 106, 79, 0.4), 0 0 40px rgba(45, 106, 79, 0.2)',
  },
} as const

// ============================================
// SEMANTIC COLOR TOKENS
// ============================================

export const semanticColors = {
  light: {
    background: colors.pearl,
    foreground: colors.midnight,
    primary: colors.royal[600],
    primaryHover: colors.royal[700],
    secondary: colors.feather.default,
    secondaryHover: colors.feather.dark,
    accent: colors.gold.default,
    accentHover: colors.gold.light,
    muted: '#64748B',

    // Card
    cardBg: '#FFFFFF',
    cardBorder: colors.royal[100],

    // Text
    heading: colors.royal[800],
    headingSecondary: colors.royal[700],
    body: '#334155',
    bodySecondary: '#475569',
    bodyMuted: '#64748B',
    link: colors.royal[600],
    linkHover: colors.royal[500],

    // States
    success: colors.feather.default,
    warning: colors.gold.light,
    error: '#DC2626',
    info: colors.royal[400],
  },

  dark: {
    background: colors.midnight,
    foreground: colors.pearl,
    primary: colors.royal[400],
    primaryHover: colors.royal[300],
    secondary: colors.feather.light,
    secondaryHover: colors.feather.default,
    accent: colors.gold.default,
    accentHover: colors.gold.light,
    muted: '#94A3B8',

    // Card
    cardBg: colors.navy,
    cardBorder: colors.royal[800],

    // Text
    heading: colors.royal[100],
    headingSecondary: colors.royal[200],
    body: '#CBD5E1',
    bodySecondary: '#94A3B8',
    bodyMuted: '#64748B',
    link: colors.royal[400],
    linkHover: colors.royal[300],

    // States
    success: colors.feather.light,
    warning: colors.gold.light,
    error: '#EF4444',
    info: colors.royal[300],
  },
} as const

// ============================================
// COMPONENT COLOR PRESETS
// ============================================

export const componentPresets = {
  button: {
    primary: {
      bg: colors.royal[600],
      bgHover: colors.royal[700],
      text: '#FFFFFF',
      shadow: shadows.peacock,
      shadowHover: shadows.peacockLg,
    },
    secondary: {
      bg: colors.feather.default,
      bgHover: colors.feather.dark,
      text: '#FFFFFF',
      shadow: shadows.feather,
      shadowHover: shadows.featherLg,
    },
    accent: {
      bg: colors.gold.default,
      bgHover: colors.gold.light,
      text: colors.midnight,
      shadow: shadows.gold,
      shadowHover: shadows.goldLg,
    },
    ghost: {
      bg: 'transparent',
      bgHover: colors.royal[50],
      text: colors.royal[600],
      border: colors.royal[400],
    },
  },

  card: {
    default: {
      bg: '#FFFFFF',
      border: colors.royal[100],
      shadow: shadows.peacock,
      hoverBorder: colors.royal[400],
      hoverShadow: shadows.peacockLg,
    },
    dark: {
      bg: colors.navy,
      border: colors.royal[800],
      shadow: shadows.dark,
      hoverBorder: colors.royal[600],
      hoverShadow: shadows.darkLg,
    },
    glass: {
      bg: 'rgba(255, 255, 255, 0.8)',
      bgDark: 'rgba(27, 38, 59, 0.8)',
      border: colors.royal[100],
      borderDark: colors.royal[800],
      backdropBlur: 'blur(12px)',
    },
  },

  navigation: {
    light: {
      bg: 'rgba(255, 255, 255, 0.9)',
      text: '#334155',
      textHover: colors.royal[600],
      textActive: colors.royal[600],
      border: colors.royal[100],
      shadow: shadows.peacock,
    },
    dark: {
      bg: 'rgba(13, 27, 42, 0.9)',
      text: '#CBD5E1',
      textHover: colors.royal[400],
      textActive: colors.royal[400],
      border: colors.royal[800],
      shadow: shadows.dark,
    },
  },

  hero: {
    light: {
      gradient: gradients.peacockHero,
      heading: '#FFFFFF',
      subheading: colors.royal[100],
      text: '#E2E8F0',
    },
    dark: {
      gradient: gradients.darkHero,
      heading: '#FFFFFF',
      subheading: colors.royal[200],
      text: '#CBD5E1',
    },
  },

  footer: {
    bg: colors.midnight,
    text: colors.royal[100],
    textMuted: colors.royal[200],
    link: colors.royal[300],
    linkHover: colors.gold.default,
    border: colors.royal[800],
    borderAccent: colors.gold.default,
  },
} as const

// ============================================
// ANIMATION TIMINGS
// ============================================

export const transitions = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slowest: '500ms',

  easing: {
    easeInOut: 'ease-in-out',
    easeOut: 'ease-out',
    easeIn: 'ease-in',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const

// ============================================
// SPACING SCALE (Peacock feather proportions)
// ============================================

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
} as const

// ============================================
// BORDER RADIUS SCALE
// ============================================

export const borderRadius = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px',
} as const

// ============================================
// BREAKPOINTS (Mobile-first)
// ============================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// ============================================
// Z-INDEX SCALE
// ============================================

export const zIndex = {
  behind: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  notification: 80,
  max: 9999,
} as const

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get color with opacity
 */
export const withOpacity = (color: string, opacity: number): string => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`
}

/**
 * Get responsive shadow based on theme
 */
export const getResponsiveShadow = (
  size: 'sm' | 'md' | 'lg' | 'xl',
  type: 'peacock' | 'gold' | 'dark' | 'feather' = 'peacock'
): string => {
  const sizeMap = {
    sm: shadows[type],
    md: shadows[`${type}Lg` as keyof typeof shadows],
    lg: shadows[`${type}Xl` as keyof typeof shadows] || shadows[`${type}Lg` as keyof typeof shadows],
    xl: shadows[`${type}Xl` as keyof typeof shadows] || shadows[`${type}Lg` as keyof typeof shadows],
  }
  return sizeMap[size] as string
}

/**
 * Get semantic color based on theme mode
 */
export const getSemanticColor = (
  colorKey: keyof typeof semanticColors.light,
  isDark: boolean = false
): string => {
  return isDark
    ? semanticColors.dark[colorKey]
    : semanticColors.light[colorKey]
}

/**
 * Apply gradient to text
 */
export const textGradient = (gradient: string): React.CSSProperties => ({
  background: gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
})

// ============================================
// EXPORT DEFAULT THEME
// ============================================

export const theme = {
  colors,
  gradients,
  shadows,
  semanticColors,
  componentPresets,
  transitions,
  spacing,
  borderRadius,
  breakpoints,
  zIndex,
} as const

export default theme
