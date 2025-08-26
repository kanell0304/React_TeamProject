/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
            colors: {
        'dark_gray': 'rgb(172, 187, 207)',
      }
    },
  },
  plugins: [],
};