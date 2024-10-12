/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customText: '#fcf9f9',
        customElements: '#120100'
      },
      fontFamily:{
        titi: ['Titillium Web', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
        rev: ['Revamped-X3q1a', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

