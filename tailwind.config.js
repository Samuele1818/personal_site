module.exports = {
 mode: 'jit',
 purge: [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './base/**/*.{js,ts,jsx,tsx}',
 ],
 darkMode: 'class',
 theme: {
  screens: {
   'sm': '640px',
  
   'md': '768px',
  
   'lg': '1150px',
  
   'xl': '1280px',
  
   '2xl': '1536px',
  },
  extend: {
   colors: {
    lavenderRose: '#FF9BFF',
    electricViolet: '#6600FF',
    puertoRico: '#3ABEAA',
   },
  },
 },
 variants: {
  extend: {},
 },
 plugins: [],
}
