/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F5F5F5",
        secendary:"#707070",
        third: "#151515",
        current: "#F3F3F3",
      }
    },
    container: { 
      center: true
    },
        fontFamily: {
        roboto:["Roboto", "sans-serif"]
      },
  },
  plugins: [],
}