// react
import React, { useState, useContext } from "react";

// provider
import { DarkModeContext } from "../utils/ThemeProvider";

// material ui
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Contact = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const ACTION = process.env.REACT_APP_ACTION_CONTENT;

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  // Allow user to send a new message
  const handleReset = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <Box className="successMsgContent">
        <Box className="successMsgContent-txt">
          <Typography variant="h2">Merci !</Typography>
          <Typography variant="body1">
            Je reviens rapidement vers vous.
          </Typography>

          <Button variant="contained" color="primary" onClick={handleReset}>
            Nouveau message
          </Button>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      component="form"
      action="https://public.herotofu.com/v1/38f15300-f813-11ed-9eca-1f15a141e038"
      method="post"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
      width={"100%"}
      minWidth={"50%"}
      mb={5}
    >
      <Typography
        variant="h5"
        sx={{
          color:
            darkMode === false
              ? theme.palette.tertiary.orange
              : theme.palette.secondary.blueGreen,
        }}
        mb={3}
      >
        Contact
      </Typography>
      <Stack spacing={5}>
        <TextField
          label="Nom"
          name="Name"
          id="name"
          variant="outlined"
          required
          autoComplete="true"
          InputLabelProps={{
            style: {
              color: darkMode
                ? theme.palette.secondary.main
                : theme.palette.primary.light,
            },
          }}
          InputProps={{
            sx: {
              borderRadius: "0px",
              color: darkMode
                ? theme.palette.secondary.main
                : theme.palette.tertiary.orange,
            },
          }}
        />
        <TextField
          label="Email"
          name="Email"
          id="email"
          type="email"
          variant="outlined"
          required
          autoComplete="true"
          InputLabelProps={{
            style: {
              color: darkMode
                ? theme.palette.secondary.main
                : theme.palette.primary.light,
            },
          }}
          InputProps={{
            sx: {
              borderRadius: "0px",
              color: darkMode
                ? theme.palette.secondary.main
                : theme.palette.tertiary.orange,
            },
          }}
        />
        <TextField
          label="Message"
          name="message"
          id="message"
          multiline
          rows={4}
          variant="outlined"
          required
          autoComplete="true"
          InputLabelProps={{
            style: {
              color: darkMode
                ? theme.palette.secondary.main
                : theme.palette.primary.light,
            },
          }}
          InputProps={{
            sx: {
              borderRadius: "0px",
              color: darkMode
                ? theme.palette.secondary.main
                : theme.palette.tertiary.orange,
            },
          }}
        />
        <Box textAlign={{ xs: "left", md: "right" }}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              p: 0,
              width: "100px",
              borderRadius: 1,
              color:
                darkMode === false
                  ? theme.palette.secondary.orange
                  : theme.palette.secondary.blueGreen,
            }}
          >
            Envoyer
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
