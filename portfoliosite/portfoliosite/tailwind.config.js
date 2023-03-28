/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '4': '4rem',
        '3': "3rem",
        '2': "2rem",
        '1': "1.5rem",
      },
    },
  },
  plugins: [],
}