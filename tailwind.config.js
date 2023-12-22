/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      backgroundImage: {
        'gradient-yellow': 'linear-gradient(0deg, #F5FD00 30%, transparent 30%)',
        'discover': "url('./assets/images/discover.png')",
        'waitlist': "url('./assets/images/waitlist.png')",
      },
  },
  },
  plugins: [require("daisyui")],
}

