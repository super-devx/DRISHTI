/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
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
          DEFAULT: '#2D6A4F',
          dark: '#1B4332',
        },
        // GOLD ACCENTS (Feather Eye Spots)
        gold: {
          light: '#FFD60A',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        bronze: '#CD7F32',
        // BACKGROUNDS
        midnight: '#0D1B2A',
        navy: '#1B263B',
        pearl: '#F8FAFC',
        'soft-feather': '#E0F2FE',
      },
      backgroundImage: {
        'gradient-peacock-hero': 'linear-gradient(135deg, #023E8A 0%, #0077B6 40%, #00B4D8 70%, #2D6A4F 100%)',
        'gradient-royal': 'linear-gradient(135deg, #03045E 0%, #023E8A 50%, #0077B6 100%)',
        'gradient-iridescent': 'linear-gradient(45deg, #0077B6, #00B4D8, #2D6A4F, #40916C, #0077B6)',
        'gradient-gold-shine': 'linear-gradient(90deg, #B8860B 0%, #D4AF37 50%, #FFD60A 100%)',
        'gradient-dark-hero': 'linear-gradient(180deg, #0D1B2A 0%, #1B263B 50%, #023E8A 100%)',
        'gradient-royal-subtle': 'linear-gradient(to right, #0077B6, #00B4D8)',
        'gradient-feather': 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)',
      },
      boxShadow: {
        'peacock': '0 4px 20px rgba(0, 119, 182, 0.15)',
        'peacock-lg': '0 10px 40px rgba(0, 119, 182, 0.2)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.2)',
        'gold-lg': '0 8px 30px rgba(212, 175, 55, 0.3)',
        'dark': '0 4px 20px rgba(13, 27, 42, 0.3)',
        'dark-lg': '0 10px 40px rgba(13, 27, 42, 0.5)',
        'feather': '0 4px 20px rgba(45, 106, 79, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'feather-float': 'featherFloat 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.3)',
          },
        },
        featherFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundSize: {
        'size-400': '400% 400%',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      },
    },
  },
  plugins: [],
}
