/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: '#08c4d4',
        secondcolor:'#000000'
      },
    },
  },
  plugins: [],
}

