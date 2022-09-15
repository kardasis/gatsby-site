/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'pat': '1em',
      },
      colors: {
        paleyellow: '#FCFCED',
        mud: '#4C2C1C',
        pink: '#FCCACE',
        rhino: '#40467d'
      }
    }
  },
  plugins: [],
}
