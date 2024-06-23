/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        section_bg: '#f2f6f7',
        hover_colr: '#ff5a3c',
        about_bg: '#f5dfdc',
        primary: '#ff5a3c',
      },
    },
  },
  plugins: [],
}

