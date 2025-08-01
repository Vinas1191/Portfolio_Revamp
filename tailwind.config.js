/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        custom: '5.3px',
      },
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
      secondary: ['GT America Trial Ext Bd', 'sans-serif'],
      tertiary: ['GT America Trial Ext Md', 'sans-serif'],
    }
    },
  },
  plugins: [require('tailwindcss-motion')], 
}