// react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// provider
import { DarkModeContext } from "../utils/ThemeProvider";

// material ui
import {
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";

// material icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const MediaLinks = () => {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <Box component={"nav"} mb={3}>
      <List
        sx={{
          m: "0",
          ml: -1,
          p: "0",
          display: "flex",
        }}
      >
        <ListItem sx={{ m: "0", p: "0", width: "auto" }}>
          <Link
            to={"https://linkedin.com/in/imbertf"}
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <LinkedInIcon
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem sx={{ m: "0", p: "0", width: "auto" }}>
          <Link
            to={"https://github.com/imbertf"}
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <GitHubIcon
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem sx={{ m: "0", p: "0", width: "auto" }}>
          <Link
            to={"https://www.malt.fr/profile/florianimbert"}
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <Typography
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                Malt
              </Typography>
            </IconButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default MediaLinks;
