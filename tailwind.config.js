/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./note-app/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Bgprincipal:'#19191A',
        BgNavbar: '#000000',
        SelectedIcon: '#13BA9E',
        TextBgColor: '#909090'
      }
    },
  },
  plugins: [],
}

