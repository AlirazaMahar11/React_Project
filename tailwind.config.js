/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '350px', // Small devices (phones)
      'md': '600px', // Medium devices (tablets)
      'lg': '1000px', // Large devices (desktops)
      'xl': '1280px', // Extra large devices (large desktops)
    },
    extend: {},
  },
  plugins: [],
}