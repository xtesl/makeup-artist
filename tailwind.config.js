/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{vue,ts,js,jsx,tsx}', "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        plum: "#6A0DAD", // Primary
        roseGold: "#EABFB9", // Accent
        champagne: "#F7E7CE", // Neutral Base
        gold: "#FFD700", // Highlight
        champagneGold: "#F0E68C"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

