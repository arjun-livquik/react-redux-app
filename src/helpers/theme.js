export default {
  colors: {
    error: "#ff0033",
    primary: "#29b6f6",
    common: { white: "#FFFFFF", black: "#000000" },
    backgroundColor: "#CCCCCC",
  },
  dimentions: {
    button: {
      textSize: "18px",
    },
  },
  spacing: (...args) => args.reduce((prev, cur) => `${prev} ${cur * 8}px`, ""),
};
