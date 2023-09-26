import { Divider, List, ListItem, Typography, useTheme } from "@mui/material";
import React, { useState, useContext } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// provider
import { DarkModeContext } from "../utils/ThemeProvider";

const NavBarComponent = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const theme = useTheme();
  const [activeFirstLink, setactiveFirstLink] = useState(false);
  const [activeSecondLink, setactiveSecondLink] = useState(false);
  const [activeThirdLink, setactiveThirdLink] = useState(false);

  const activeFirst = () => {
    if (activeFirstLink === true) {
      setactiveFirstLink(activeFirstLink);
    } else {
      setactiveThirdLink(false);
      setactiveSecondLink(false);
      setactiveFirstLink(!activeFirstLink);
    }
  };

  const activeSecond = () => {
    if (activeSecondLink === true) {
      setactiveSecondLink(activeSecondLink);
    } else {
      setactiveThirdLink(false);
      setactiveFirstLink(false);
      setactiveSecondLink(!activeSecondLink);
    }
  };

  const activeThird = () => {
    if (activeThirdLink === true) {
      setactiveThirdLink(activeThirdLink);
    } else {
      setactiveFirstLink(false);
      setactiveSecondLink(false);
      setactiveThirdLink(!activeThirdLink);
    }
  };

  return (
    <nav aria-label="secondary mailbox folders" className="navBar">
      <List>
        <ListItem disablePadding>
          <Divider
            sx={{
              width: activeFirstLink ? "100px" : "50px",
              mr: 2,
              transition: "all 350ms ease",
              borderColor: activeFirstLink
                ? darkMode
                  ? theme.palette.secondary.blueGreen
                  : theme.palette.tertiary.orange
                : darkMode
                ? "lightgray"
                : theme.palette.primary.light,
            }}
          />
          <Typography
            style={{
              cursor: "pointer",
              color: activeFirstLink
                ? darkMode
                  ? theme.palette.secondary.blueGreen
                  : theme.palette.tertiary.orange
                : darkMode
                ? theme.palette.secondary.main
                : theme.palette.primary.light,
            }}
          >
            <ScrollLink onClick={activeFirst} to="about">
              A propos
            </ScrollLink>
          </Typography>
        </ListItem>
        <ListItem disablePadding>
          <Divider
            sx={{
              width: activeSecondLink ? "100px" : "50px",
              mr: 2,
              transition: "all 350ms ease",
              borderColor: activeSecondLink
                ? darkMode
                  ? theme.palette.secondary.blueGreen
                  : theme.palette.tertiary.orange
                : darkMode
                ? "lightgray"
                : theme.palette.primary.light,
            }}
          />
          <Typography
            style={{
              cursor: "pointer",
              color: activeSecondLink
                ? darkMode
                  ? theme.palette.secondary.blueGreen
                  : theme.palette.tertiary.orange
                : darkMode
                ? theme.palette.secondary.main
                : theme.palette.primary.light,
            }}
          >
            <ScrollLink onClick={activeSecond} to="experiences">
              Experiences
            </ScrollLink>
          </Typography>
        </ListItem>
        <ListItem disablePadding>
          <Divider
            sx={{
              width: activeThirdLink ? "100px" : "50px",
              mr: 2,
              transition: "all 350ms ease",
              borderColor: activeThirdLink
                ? darkMode
                  ? theme.palette.secondary.blueGreen
                  : theme.palette.tertiary.orange
                : darkMode
                ? "lightgray"
                : theme.palette.primary.light,
            }}
          />
          <Typography
            style={{
              cursor: "pointer",
              color: activeThirdLink
                ? darkMode
                  ? theme.palette.secondary.blueGreen
                  : theme.palette.tertiary.orange
                : darkMode
                ? theme.palette.secondary.main
                : theme.palette.primary.light,
            }}
          >
            <ScrollLink onClick={activeThird} to="projects">
              Projets
            </ScrollLink>
          </Typography>
        </ListItem>
      </List>
    </nav>
  );
};

export default NavBarComponent;
