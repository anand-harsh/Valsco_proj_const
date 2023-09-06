/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor:{
      white: '#FFFFFF',
      grey: '#545353',
      black: '#000000',
    },
    backgroundColor:{
      white: '#FFFFFF',
      black: '#000000',
      grey: '#4A4242',
      darkGrey: '#121212',
      orange: '#F9AB3C'
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
