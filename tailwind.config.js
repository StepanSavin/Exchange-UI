module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily:{
      'volk':'Vollkorn'
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['16px', '23px'],
      xl: ['20px', '20px'],
      sl: ['40px', '48px'],
      big: ['50px','60px']
    },
    maxWidth: {
      '1/2': '110px',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
