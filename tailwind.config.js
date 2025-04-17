/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      backgroundImage: {
        'custom-pattern': "url('https://wallpaperaccess.com/full/5651980.jpg')", 
        // 'custom-pattern': "url('https://i.pinimg.com/564x/0e/3b/53/0e3b539b0b28137ae1c0caeef6e31792.jpg')", 
      },
    },
  },
  plugins: [],
}
