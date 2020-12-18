import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    offWhite01: "#fffdf6",
    offWhite02: "#faf6e9",
    offWhite03: "#ece8d9",
    brown: "#494949",
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
