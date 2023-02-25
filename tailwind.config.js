/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "arc":"url('/src/assets/images/arc-reactor-edited.png')"
      }
    },
  },
  plugins: [],
}