/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'main_gray': 'rgb(172, 187, 207)',
        'main_color':'rgb(101, 142, 166)',
        // 'main_gray_a' : 'rgba(172, 187, 207, 0.4)',
        'sub_color':'rgba(162, 206, 222,0.4)',
        'sub_color2':'rgb(159, 192, 201)',
        // 'hover_main_gray' : 'rgb(152,167,187)'
        'hover_color' :'rgb(197, 220, 227)'
      }
    },
  },
  plugins: [],
};