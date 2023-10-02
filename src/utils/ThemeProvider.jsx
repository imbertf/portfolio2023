// react
import { createContext, useState } from "react";

// material ui
import { createTheme } from "@mui/material/styles";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#edf2f4ff",
      dark: "#0b090a",
    },
    secondary: {
      main: "#023047ff",
      blueGreen: "#219ebcff",
      skyBlue: "#8ecae6ff",
    },
    tertiary: {
      orange: "#fb8500ff",
      yellow: "#ffb703ff",
      green: "#ccff33ff",
    },
  },

  components: {
    MuiCardActionArea: {
      styleOverrides: {
        focusHighlight: {
          color: "transparent",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          ":hover": { backgroundColor: "transparent !important" },
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});

export default theme;
