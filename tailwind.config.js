module.exports = {
 mode: 'jit',
 purge: [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './base/**/*.{js,ts,jsx,tsx}',
 ],
 darkMode: 'class',
 theme: {
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
