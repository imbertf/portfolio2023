// react
import React, { useContext } from "react";

// utils
import { DarkModeContext } from "./utils/ThemeProvider";

// sections
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`app ${darkMode ? "lightMode" : "darkMode"}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
