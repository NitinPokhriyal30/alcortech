/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5486E3',
        'primary-400': '#93c5fd',
        translucent: 'rgba(84 134 227 / 0.15)',
        'translucent-white': 'rgba(256 256 256 / 0.15)',
      },
      fontFamily: {
        Lato: ['Lato'],
      },
    },
  },
  plugins: [],
}
