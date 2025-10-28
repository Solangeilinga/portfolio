/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // indispensable pour que Tailwind scanne tes composants React
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        surface: '#1e293b',
        primary: '#2563eb',
        secondary: '#1e40af',
        accent: '#3b82f6',
      }
    },
  },
  plugins: [],
};



