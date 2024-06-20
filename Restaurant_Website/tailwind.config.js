/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: " rgb(253 186 116 / var(--tw-bg-opacity))",
      },
    },
  },
  plugins: [],
}