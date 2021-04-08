module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        DEFAULT: "#16161A",
      },
      white: {
        DEFAULT: "#FFFFFE",
      },
      gray: {
        DEFAULT: "#94A1B2",
      },
      green: {
        DEFAULT: "#2CB67D",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      display: ["Poppins"],
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
      margin: ["last"],
      padding: ["last"],
    },
  },
  plugins: [],
};
