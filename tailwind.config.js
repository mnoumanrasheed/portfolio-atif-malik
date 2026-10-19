/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Authoritative Executive Palette: Deep Teal #377A8A & Soft Cyan #51AAC0
        canvas: {
          DEFAULT: '#FFFFFF',
          subtle: '#F8FAFC',
          warm: '#F5F7F6'
        },
        ink: {
          DEFAULT: '#17272D', // headings - dark neutral executive ink
          body: '#334155',    // body copy - crisp and high-contrast
          muted: '#536169',   // secondary text
          subtle: '#8898A1'
        },
        brand: {
          DEFAULT: '#286252', // Deep Emerald Teal
          hover: '#1F4F42',
          dark: '#163B31',
          wash: '#EFF7F4',
          accent: '#388470'
        },
        accent: {
          DEFAULT: '#286252', // Deep Emerald Teal
          hover: '#1F4F42',
          wash: '#EBF5F1'
        },
        line: {
          DEFAULT: '#E2E8F0',
          strong: '#CBD5E1'
        },
        deep: {
          DEFAULT: '#0E241E', // Deep Emerald band / footer
          surface: '#183B31',
          soft: '#204C40'
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      fontSize: {
        meta: ['0.75rem', { lineHeight: '1.1rem' }]
      },
      maxWidth: {
        page: '78rem' // ~1248px
      },
      borderRadius: {
        card: '16px',
        pill: '9999px'
      },
      boxShadow: {
        soft: '0 1px 3px rgba(15, 23, 42, 0.05), 0 6px 20px rgba(15, 23, 42, 0.04)',
        card: '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 12px 24px -2px rgba(15, 23, 42, 0.05)',
        lift: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04)',
        glow: '0 0 25px -5px rgba(30, 64, 175, 0.25)'
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
};
