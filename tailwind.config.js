/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // indispensable pour que Tailwind scanne tes composants React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
