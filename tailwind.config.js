/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ajout d'une police épurée, remplacez par celle de votre choix si besoin
        sans: ['Inter', 'sans-serif'], 
      },
      colors: {
        // Ancienne : #0f172a (sombre) -> Nouvelle : #ebebdf (clair)
        background: '#ebebdf', 
        
        // Ancienne : #1e293b (sombre) -> Nouvelle : #ffffff (blanc pur pour contraster)
        surface: '#ffffff',    
        
        // Ancienne : #2563eb (bleu vif) -> Nouvelle : #1a1264 (bleu profond)
        primary: '#1a1264',    
        
        // Ancienne : #1e40af -> Nouvelle : #1a1264 (pour l'unité)
        secondary: '#1a1264', 
        
        // Ancienne : #3b82f6 -> Nouvelle : #1a1264 (on reste sur la même teinte pour le flat design)
        accent: '#1a1264',     

        // Vos nouvelles couleurs nommées, pour référence
        brandBlue: '#1a1264',
        brandCream: '#ebebdf',
      }
    },
  },
  plugins: [],
};