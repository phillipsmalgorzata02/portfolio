/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
