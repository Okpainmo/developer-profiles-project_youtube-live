/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '770px',
      // => @media (min-width: 770px) { ... }

      lg: '1150px',
      // => @media (min-width: 1150px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
