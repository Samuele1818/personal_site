module.exports = {
 mode: 'jit',
 purge: [
    '/pages/**/*.{js,ts,jsx,tsx}',
    '/components/**/*.{js,ts,jsx,tsx}',
    '/base/**/*.{js,ts,jsx,tsx}',
 ],
 darkMode: 'class',
 theme: {
  extend: {
   colors: {
    background: '#1f1f1f',
    'baltic-sea': '#29262B',
    'ship-gray': '#3C3541',
    'medium-purple': '#AC5FDB',
    'biloba-flower': '#E3A2EE',
   },
  },
 },
 variants: {
  extend: {},
 },
 plugins: [],
}
