/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          950: '#000000',
          900: '#0A0A0A',
          850: '#121212',
          800: '#171717',
          750: '#212121',
          700: '#2A2A2A',
          600: '#404040',
          500: '#525252',
          400: '#737373',
          300: '#A3A3A3',
          200: '#D4D4D4',
          100: '#E5E5E5',
          50: '#F5F5F5',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        editorial: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.05em',
        widest: '0.18em',
        archival: '0.25em',
      },
      boxShadow: {
        'sharp': '0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'subtle': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.9)',
      }
    },
  },
  plugins: [],
}
