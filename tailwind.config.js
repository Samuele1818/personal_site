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
    codGray: '#1b1b1b',
    electricViolet: '#6600FF',
    caribbeanGreen: '#00CC99',
   },
  },
 },
 variants: {
  extend: {},
 },
 plugins: [],
}
