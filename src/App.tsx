import React from "react";
import "./global.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
