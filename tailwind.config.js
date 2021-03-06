module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '72': '18rem',
        '80': '20rem',
      },
      padding: {
        '5/6': '83.3333333%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
