import React, { useState, useEffect, useContext } from "react";

import { Button, styled, useTheme } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// provider
import { DarkModeContext } from "../../utils/ThemeProvider";

const ScrollToTopButtonComponentRoot = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

const ScrollToTopButtonComponent = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <ScrollToTopButtonComponentRoot>
      {isVisible && (
        <Button
          variant="contained"
          color="primary"
          onClick={scrollToTop}
          sx={{
            p: 0,
            minWidth: "35px",
            color:
              darkMode === false
                ? theme.palette.tertiary.orange
                : theme.palette.secondary.blueGreen,
          }}
        >
          <KeyboardArrowUpIcon />
        </Button>
      )}
    </ScrollToTopButtonComponentRoot>
  );
};

export default ScrollToTopButtonComponent;
