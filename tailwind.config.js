/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      color: {
        'brandprimary': '#4CAF4F', // Dark blue
        'secondary': '#e9ecef', // Light gray
        'text': '#212529', // Dark gray for text
        'blueColor':'#2a68ff',
        'greyIsh': '#f1f4f8',
        'cardShadow':'#f7f8f9',
        'textColor':'#252b36',
        
      }
    },
    
  },
  
  plugins: [
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
  ],
}

