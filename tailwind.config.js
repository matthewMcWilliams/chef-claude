/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif']
      }
    },
  },
  plugins: [],
}

