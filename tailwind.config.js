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
    background: '#1f1f1f',
    balticSea: '#29262B',
    shipGray: '#3C3541',
    mediumPurple: '#AC5FDB',
    bilobaFlower: '#E3A2EE',
   },
  },
 },
 variants: {
  extend: {},
 },
 plugins: [],
}
