import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  useTheme,
  Stack,
  Box,
} from "@mui/material";

// provider
import { DarkModeContext } from "../../utils/ThemeProvider";
import { Link } from "react-router-dom";

const ExperienceCardComponent = ({ date, title, icons, text, links }) => {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          background: "transparent",
          border: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            p: "0 ",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              pt={"3px"}
              sx={{ fontSize: 14 }}
              style={{
                color:
                  darkMode === false
                    ? theme.palette.tertiary.orange
                    : theme.palette.secondary.blueGreen,
              }}
              gutterBottom
            >
              {date}
            </Typography>
          </Box>
          <Box ml={{ xs: "0", sm: 3 }} maxWidth={{ xs: "inherit", sm: "70%" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color:
                  darkMode === false
                    ? theme.palette.primary.light
                    : theme.palette.secondary.main,
              }}
            >
              {title}
            </Typography>
            <Stack direction={"row"}>
              {icons.map((icon, index) => (
                <Typography sx={{ mr: 1.5 }} key={index} fontSize={20}>
                  {icon}
                </Typography>
              ))}
            </Stack>
            <Typography variant="body1">{text}</Typography>
            <Stack>
              {links.map((link, index) => (
                <Link
                  to={`https://${link}`}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <Button
                    sx={{
                      color:
                        darkMode === false
                          ? theme.palette.tertiary.orange
                          : theme.palette.secondary.blueGreen,
                      padding: 0,
                      fontSize: "12px",
                      fontWeight: "small",
                    }}
                  >
                    {link}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ExperienceCardComponent;
