/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.js", "src/**/*.jsx", "src/*.js", "src/*.jsx", "src/**/*.html", "src/*.html", "src/**/*.ts", "src/**/*.tsx", "src/*.ts", "src/*.tsx"],
  theme: {
    extend: {
      colors: {
        'main': ' #253945',
        'main-txt': '#eee',
        'focus': '#f8f8f8',
        'delete': '#a45959'
      }
    },
  },
  plugins: [],
};
