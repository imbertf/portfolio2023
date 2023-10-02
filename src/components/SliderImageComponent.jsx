// react
import React, { useState, useContext } from "react";

// material ui
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

// provider
import { DarkModeContext } from "../utils/ThemeProvider";

// images
import imageA from "../medias/images/cookingAppProject/homePage_desktop.png";
import imageB from "../medias/images/cookingAppProject/homePage_mobile.png";
import imageC from "../medias/images/cookingAppProject/recipePage_desktop.png";
import imageD from "../medias/images/cookingAppProject/recipePage_mobile.png";
import imageE from "../medias/images/cookingAppProject/adminRecipe_tab.png";
import imageF from "../medias/images/cookingAppProject/recipeDetailPage_desktop.png";
import imageG from "../medias/images/cookingAppProject/recipeDetailPage_mobile.png";
import imageH from "../medias/images/cookingAppProject/registerPage_desktop.png";
import imageI from "../medias/images/cookingAppProject/termsPage_tab.png";
import imageJ from "../medias/images/cookingAppProject/userProfilPage_desktop.png";

// icons
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Images = [
  { img: imageA },
  { img: imageB },
  { img: imageC },
  { img: imageD },
  { img: imageE },
  { img: imageF },
  { img: imageG },
  { img: imageH },
  { img: imageI },
  { img: imageJ },
];

const SliderImageComponent = () => {
  // theme
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const theme = useTheme();

  // slider count
  const [step, setStep] = useState(0);
  const imagesLenght = Images.length - 1;

  const nextSlide = () => {
    if (step < imagesLenght) {
      setStep(step + 1);
    } else if (step >= imagesLenght) {
      setStep(0);
    }
  };
  const previousSlide = () => {
    if (step > 0) {
      setStep(step - 1);
    } else if (step === 0) {
      setStep(imagesLenght);
    }
  };

  return (
    <Box>
      <Box sx={{ height: "600px" }}>
        {Images.map((image, index) => {
          if (step === index) {
            return (
              <img
                key={index}
                src={image.img}
                alt="cooking app project"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "scale-down",
                }}
              />
            );
          }
        })}
      </Box>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={3}
      >
        <Button onClick={previousSlide}>
          <ArrowLeftIcon
            style={{
              color:
                darkMode === false
                  ? theme.palette.tertiary.orange
                  : theme.palette.secondary.blueGreen,
              fontSize: "30px",
            }}
          />
        </Button>
        <Typography>
          {step + 1} - {imagesLenght + 1}
        </Typography>
        <Button onClick={nextSlide}>
          <ArrowRightIcon
            style={{
              color:
                darkMode === false
                  ? theme.palette.tertiary.orange
                  : theme.palette.secondary.blueGreen,
              fontSize: "30px",
            }}
          />
        </Button>
      </Stack>
    </Box>
  );
};

export default SliderImageComponent;
