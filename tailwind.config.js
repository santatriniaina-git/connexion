const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,js}"

  ],
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '5400px',
      // => @media (min-width: 768px) { ... }

      'lg': '600px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins',...defaultTheme.fontFamily.sans],
    },
      boxShadow: {
        
      }
    },
  plugins: [],

 },
}

