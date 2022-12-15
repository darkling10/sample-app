module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_400: "#c0c4cc",
        black_900_b2: "#000000b2",
        black_900: "#000000",
        bluegray_400: "#898e9a",
        gray_900: "#141e35",
        black_900_19: "#00000019",
        white_A700: "#ffffff",
        gray_300: "#e1e3e6",
      },
      borderRadius: {
        radius2: "2px",
        radius8: "8px",
        radius10: "10px",
        radius50: "50%",
      },
      letterSpacing: {
        ls1: "-1px",
        ls012: "-0.12px",
        ls014: "-0.14px",
        ls016: "-0.16px",
        ls018: "-0.18px",
        ls024: "-0.24px",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "1px 2px  8px 2px #00000019" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
