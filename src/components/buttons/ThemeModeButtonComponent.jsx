// react
import React, { useContext } from "react";

// provider
import { DarkModeContext } from "../../utils/ThemeProvider";

// icons
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const ThemeModeButton = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className={`themeModeButton ${
        darkMode ? "themeModeButton--dark" : "themeModeButton--light"
      }`}
    >
      {darkMode === false ? <LightModeIcon /> : <ModeNightIcon />}
    </button>
  );
};

export default ThemeModeButton;
