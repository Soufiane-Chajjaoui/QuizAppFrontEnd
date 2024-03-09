/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily : {
        poppins : ['Poppins']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
