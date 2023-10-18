/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'primary': '#00FFBB',
    },
    fontFamily: {
      'body' : ['Inter', 'Helvetica', 'sans-serif'],
      'title' : ['Bebas Neue', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'heavy' : '0px 0px 46px 32px rgba(0,0,0,0.3);'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

