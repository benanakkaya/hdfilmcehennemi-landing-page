module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors:{
        dark: "#212529",
        veryDark: "#131619",
        gray: "#343a40",
        gray2: "#191d20",
        lightGray :"#52575c",
        customRed: "#dc3545",
        darkRed: "#bb2d3b",
        customWhite: "#f7fdfd",
        gray3: "#97999a",
        gray4: "#6c757d",
        gray5: "#383b3f",
        gray6: "#2c3034"
      },
      container: {
        center: true
      },
      fontSize: {
        default: "1rem"
      },
      padding:{
        half: "0.15rem"
      }
    },
  },
  plugins: [],
}