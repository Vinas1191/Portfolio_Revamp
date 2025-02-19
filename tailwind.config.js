/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#1E1E1E',
      secondary: {
        100: '#FFFFFF',
        200: '#F7F7F7',
        300: '#979595'
      },
      tertiary: '#B8FF64',
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['GT America Trial', 'sans-serif'],
    }
    },
  },
  plugins: [require('tailwindcss-motion')], 
}