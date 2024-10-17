/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... }
      },
    },
  },
  plugins: [],
}

