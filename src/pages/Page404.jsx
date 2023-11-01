// react
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// provider
import { DarkModeContext } from "../utils/ThemeProvider";

// component
import ThemeModeButton from "../components/buttons/ThemeModeButtonComponent";
import ScrollToTopButtonComponent from "../components/buttons/ScrollToTopButtonComponent";

// image
import Ovni from "../medias/images/404/404.png";

// material ui
import { Button, Box, Stack, Typography, useTheme } from "@mui/material";

const Page404 = () => {
  // theme
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const theme = useTheme();

  return (
    <Box sx={{ height: "100vh" }}>
      <Stack position={"fixed"} right={20} zIndex={1}>
        <ThemeModeButton />
        <ScrollToTopButtonComponent />
      </Stack>
      <Box
        component={"main"}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Stack alignItems={"center"} mb={30}>
          <Box sx={{ maxWidth: "500px" }}>
            <img src={Ovni} alt="ovni" style={{ width: "100%" }} />
          </Box>
          <Typography
            component="h1"
            variant="h2"
            sx={{ transform: "rotate(306deg)" }}
          >
            [error404]
          </Typography>
        </Stack>

        <Typography fontSize={30} gutterBottom>
          La page que vous recherchez à été enlevée!
        </Typography>
        <Link
          to={"/"}
          style={{
            textAlign: "center",
            width: "180px",
            border: "1px solid red",
            borderColor:
              darkMode === false
                ? theme.palette.tertiary.orange
                : theme.palette.secondary.blueGreen,
          }}
        >
          <Button
            sx={{
              color:
                darkMode === false
                  ? theme.palette.tertiary.orange
                  : theme.palette.secondary.blueGreen,
            }}
          >
            Accueil
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Page404;
