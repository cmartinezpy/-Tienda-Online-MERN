/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '_45': '-45deg',
      },
      colors: {
        'salmon': '#E7C192',
        'transparent': 'rgb(0,0,0,0)',
        'half-transparente': 'rgba(0,0,0,0.5)',
      },
      trannsitionProperty: {
        'width': 'width',
      },
    },
  },
  plugins: [],
}
