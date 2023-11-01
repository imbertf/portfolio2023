// react
import React, { useContext, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// utils
import { DarkModeContext } from "./utils/ThemeProvider";

// pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import Page404 from "./pages/Page404";

// functions
// Automatically scroll to top page after using Link
const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`app ${darkMode ? "lightMode" : "darkMode"}`}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/project" element={<ProjectPage />}></Route>
            <Route path="/*" element={<Page404 />}></Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
