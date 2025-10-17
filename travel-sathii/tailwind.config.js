
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode:'class',
  theme: {
    extend: {
      screens:{
        "other" :{'min':'340px' , 'max':'1200px'},
        primary: '#0077B6',
      secondary: '#00B4D8',
      accent: '#FFB703',
      dark: '#1E293B',
      ai: '#6930C3',
      }
      
    },
  },
  plugins: [
     require('flowbite/plugin'),
  ],
}

