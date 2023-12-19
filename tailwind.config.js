/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {},
    colors: {
      mainColor: '#105A9D', // bg-mainColor
      mainHoverColor: '#6AA1D2',
      yellow: '#FFD700',
      orange: '#FFA500',
      purple: '#800080',
      green: '#2E8B57',
      black: '#000',
      white: '#fff',
      gray: 'rgba(0, 0, 0, 0.06)'
    },
    spacing: {
      80: '80%',
      60: '60%',
      40: '40%',
      20: '20%',
      1: '1rem',
      1.25: '1.25rem',
      1.5: '1.5rem',
      1.75: '1.75rem',
      2: '2rem',
      2.5: '2.5rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem',
      10: '10rem',
      15: '15rem',
      25: '25rem',
      30: '30rem',
      40: '40rem'
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false // 禁止设置初始值
  }
}
