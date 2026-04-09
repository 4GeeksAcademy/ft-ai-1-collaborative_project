/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project/*.html", "./project/*.js"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
