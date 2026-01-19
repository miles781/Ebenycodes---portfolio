/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#0a0a0a',    // Dark background
        card: '#1a1a1a',    // Card backgrounds
        primary: '#2dd4bf', // Teal accent color
        primaryHover: '#14B8A6', // Teal-500
        secondary: '#64748B', // Slate-500 (Muted Text)
        lightHover: '#fcf4ff',
        darkhover: '#2a004a',
        darkTheme: '#11001f',
      },
      fontFamily:{
        Outfit:["Outfit", "sans-serif"],
        Ovo:["Ovo","serif"],
        sans: ['Inter', 'sans-serif'], // Clean, technical font
        mono: ['JetBrains Mono', 'monospace'], // For code snippets
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'black' : '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      }
    },
  },
  darkMode:'selector',   
  plugins: [],
};