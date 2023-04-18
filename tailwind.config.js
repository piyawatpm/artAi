const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = withMT( {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
        appear:'appear 2s linear',
        full:'full 1s '
      },
      keyframes: {
        type: {
          '0%': { width: '0%' },
   
          '5%, 30%': { width: '30%' },
 
          '35%, 60%': { width: '57%' },

          '65%, 100%': { width: '100%' },
        },
        appear: {
          '0%': { opacity: '0%' },
          '5%, 30%': { opacity: '30%' },
          '35%, 60%': { opacity: '60%' },
          '65%, 100%': { opacity: '100%' },
        },
        full:{
          "0% ":{
            "border-radius": "15px 100% 15px 15px"
          },
          "100% ":{
            "border-radius": "15px"
          }
        }
      },
    },
  },
  plugins: [],
})