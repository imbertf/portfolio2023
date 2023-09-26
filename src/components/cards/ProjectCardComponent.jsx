// react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// material ui
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useTheme,
  Stack,
} from "@mui/material";

// provider
import { DarkModeContext } from "../../utils/ThemeProvider";

export default function ProjectCardComponent({
  icons,
  title,
  text,
  link,
  image,
  date,
}) {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <Card
      className="projectCardComponent"
      variant="outlined"
      sx={{
        background: "transparent",
        border: "none",
        borderRadius: "0px",
        mb: 10,
        p: { sx: "0", sm: 1 },
      }}
    >
      <Link to={`https://${link}`} target="_blank" rel="noreferrer">
        <CardActionArea
          sx={{
            p: 1,
            border: "none",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <CardMedia
            height={"100px"}
            component="img"
            image={image}
            alt="cooking app project logo"
            sx={{
              objectFit: "contain",
              background: "white",
              width: "150px",
              boxShadow: darkMode === true && "0 0 5px lightgrey",
              borderRadius: darkMode === true && "3px",
              ml: { xs: "16px", sm: "0" },
            }}
          />
          <CardContent>
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
            <Stack direction={"row"} sx={{ mb: 2 }}>
              {icons.map((icon, index) => (
                <Typography sx={{ mr: 1.5 }} key={index} fontSize={20}>
                  {icon}
                </Typography>
              ))}
            </Stack>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign={"justify"}
            >
              {text}
            </Typography>
            <CardActions sx={{ overflowWrap: "anywhere" }}>
              <Button
                className="projectCardComponent__link"
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
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
