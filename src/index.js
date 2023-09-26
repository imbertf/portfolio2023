import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// providers
import { DarkModeProvider } from "./utils/ThemeProvider";
import Theme from "./utils/ThemeProvider";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
