/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Executive Royal Sapphire & Midnight Navy palette.
        canvas: {
          DEFAULT: '#FFFFFF',
          subtle: '#F8FAFC',
          warm: '#F1F5F9'
        },
        ink: {
          DEFAULT: '#0F172A', // headings - deep slate/midnight
          body: '#334155',    // body copy - crisp and high-contrast
          muted: '#64748B',   // secondary text
          subtle: '#94A3B8'
        },
        brand: {
          DEFAULT: '#1E40AF', // Primary Executive Royal Blue
          hover: '#1D4ED8',
          dark: '#1E3A8A',
          wash: '#EFF6FF',
          accent: '#3B82F6'
        },
        accent: {
          DEFAULT: '#0284C7', // Executive Sapphire
          hover: '#0369A1',
          wash: '#F0F9FF'
        },
        line: {
          DEFAULT: '#E2E8F0',
          strong: '#CBD5E1'
        },
        deep: {
          DEFAULT: '#0A192F', // Luxury Midnight Navy contrast band / footer
          surface: '#0F2537',
          soft: '#1E293B'
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
