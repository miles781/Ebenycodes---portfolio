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
        lightHover: '#fcf4ff',
        darkhover: '#2a004a',
        darkTheme: '#11001f',
        // Custom portfolio theme colors
        page: '#0a0a0a', // Dark background
        card: '#1a1a1a', // Card backgrounds
        primary: '#2dd4bf', // Teal accent color
      },
      fontFamily:{
        Outfit:["Outfit", "sans-serif"],
        Ovo:["Ovo","serif"] 
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'black' : '4px 4px 0 #fff',
      },
     gridTemplateColumns: {
      'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
     } 

    },
  },
  darkMode:'selector',   
  plugins: [],
};
