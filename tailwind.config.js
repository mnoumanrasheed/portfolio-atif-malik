/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // White-first executive palette. Values mirror CSS variables in tokens.css.
        canvas: {
          DEFAULT: '#FFFFFF',
          subtle: '#F7F9F8',
          warm: '#F2F6F5'
        },
        ink: {
          DEFAULT: '#19272D', // headings
          body: '#4F5D63', // body copy
          muted: '#5F6F76' // secondary text (AA on white and #F7F9F8)
        },
        accent: {
          DEFAULT: '#377A8A',
          hover: '#286472',
          wash: '#E9F3F4'
        },
        line: {
          DEFAULT: '#DFE7E8',
          strong: '#C9D5D7'
        },
        deep: {
          DEFAULT: '#193039', // single contrast band / footer only
          soft: '#22404B'
        }
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      fontSize: {
        // Minimum readable metadata size is 12px.
        meta: ['0.75rem', { lineHeight: '1.1rem' }]
      },
      maxWidth: {
        page: '76rem' // ~1216px
      },
      borderRadius: {
        card: '14px'
      },
      boxShadow: {
        soft: '0 1px 2px rgba(25, 39, 45, 0.04), 0 4px 16px rgba(25, 39, 45, 0.04)',
        lift: '0 2px 4px rgba(25, 39, 45, 0.05), 0 12px 32px rgba(25, 39, 45, 0.08)'
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
};
