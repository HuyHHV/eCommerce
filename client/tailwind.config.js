/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important:'#root',
  theme: {
    extend: {
      spacing: {
        '80vh': '80vh',
        '100vw':'100vw',
        '50vw':'50vw',
        '30vh':'30vh'
      }
    },
  },
  plugins: [],
}
