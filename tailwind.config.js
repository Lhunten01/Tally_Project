/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          '50': '#fff0f0',
          '100': '#ffdddd',
          '200': '#ffc0c0',
          '300': '#ff9494',
          '400': '#ff5757',
          '500': '#ff2323',
          '600': '#f70000',
          '700': '#d70000',
          '800': '#b10303',
          '900': '#920a0a',
          '950': '#500000',
        },
        'electric-violet': {
          '50': '#ebefff',
          '100': '#dbe1ff',
          '200': '#bec7ff',
          '300': '#97a1ff',
          '400': '#6e6eff',
          '500': '#594cff',
          '600': '#5233ff',
          '700': '#4120e2',
          '800': '#351db6',
          '900': '#2f208f',
          '950': '#1d1353',
      },
    
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        bell: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

