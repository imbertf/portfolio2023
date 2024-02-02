import React, { useContext } from "react";

// material ui
import { Button, useTheme } from "@mui/material";

// provider
import { DarkModeContext } from "../../utils/ThemeProvider";

const DownloadFileButton = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const theme = useTheme();

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("cv_florian_imbert_2024.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "cv_florian_imbert_2024.pdf";
        alink.click();
      });
    });
  };
  return (
    <Button
      onClick={onButtonClick}
      variant="outlined"
      sx={{
        color:
          darkMode === false
            ? theme.palette.primary.light
            : theme.palette.primary.light,
        borderColor:
          darkMode === false
            ? theme.palette.tertiary.orange
            : theme.palette.secondary.blueGreen,
        backgroundColor:
          darkMode === false
            ? theme.palette.tertiary.orange
            : theme.palette.secondary.blueGreen,
      }}
    >
      Télécharger mon CV
    </Button>
  );
};

export default DownloadFileButton;
