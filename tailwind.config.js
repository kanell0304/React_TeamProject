/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main_gray': 'rgb(172, 187, 207)',
        'main_gray_a' : 'rgba(172, 187, 207, 0.4)',
        'hover_main_gray' : 'rgb(152,167,187)'
      }
    },
  },
  plugins: [],
};