/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D1A054B3',
        secondary: '#D99904',
      },
      fontFamily: {
        interFont: ['Inter', 'Arial', 'sans-serif'],
        cinzelFont: ['Cinzel', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}