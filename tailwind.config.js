/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'lg': '1rem',
      },
      gridTemplateColumns: {
        'layout': '4rem auto',
      },
      colors: {
        transparent: 'transparent',
        current: '#5b21b6',
        'white': '#ffffff',
        'black': '#0c0a09',
      },
      spacing: {
        'header': '4rem',
      }
    },
  },
  plugins: [],
}