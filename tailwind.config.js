/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}" // Hier wird der components-Ordner hinzugefügt
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:"#1f3f70",
        correct:"#00bf63",
        false:"#ff3131"
      }
    },
  },
  plugins: [],
}