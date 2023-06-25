import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
        first: "#7EBDC3",
        second : "#538FD0",
        third : "#3F8085",
        fourth: "#004346",
        fifth : "#1C0B19",
        sixth:"#386EA7",
        bg_light:"#F1F8F9",
        placeHolder: "#bfbfbf",
        text: "#ddedee"
  },
  gradients:{
    button: "linear-gradient(to-bl, #3f8085, #317075, #226165, #135255, #004346);",
    button_hover: "linear-gradient(to-bl, #135b60, #0e4f53, #0a4447, #06393b, #032e30);",
  }
});

export default theme;

