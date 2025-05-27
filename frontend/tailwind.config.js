/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B4CCA',
          dark: '#2A3AA9',
          light: '#5A6AE9'
        },
        secondary: {
          DEFAULT: '#8A2BE2',
          dark: '#6A1CB2',
          light: '#A84DF2'
        },
        background: {
          DEFAULT: '#0F0F1A',
          light: '#1A1A2E'
        },
        accent: {
          DEFAULT: '#E2E8F0',
          dark: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}