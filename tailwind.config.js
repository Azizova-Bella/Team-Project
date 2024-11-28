/ @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src//*.{html,js}"],
    theme:  {
      extend: {backgroundImage: {
        'custom-pattern': "url('./img/r1.png')",
      },},
    },
    plugins: [],
  }