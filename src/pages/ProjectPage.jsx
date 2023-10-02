// react
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";

// provider
import { DarkModeContext } from "../utils/ThemeProvider";

// component
import ThemeModeButton from "../components/buttons/ThemeModeButtonComponent";
import MediaLinks from "../components/MediaLinksComponent";
import ScrollToTopButtonComponent from "../components/buttons/ScrollToTopButtonComponent";
import SliderImageComponent from "../components/SliderImageComponent";

// material ui
import {
  Button,
  Box,
  Stack,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grow,
  Divider,
  Paper,
} from "@mui/material";

// icons
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiMui, SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

// functions
function onPhoneClick() {
  window.open(`tel:+33684088879`);
}

function onEmailClick() {
  window.open(`mailto:f.imbert4@gmail.com`);
}

const ProjectPage = () => {
  // theme
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const theme = useTheme();

  // animation
  const [inView, setInView] = useState(false);

  const handleEnterViewport = () => {
    setInView(true);
  };

  const handleExitViewport = () => {
    setInView(false);
  };

  return (
    <Box id={"topPage"} pb={10}>
      <Stack position={"fixed"} right={20} zIndex={1}>
        <ThemeModeButton />
        <ScrollToTopButtonComponent />
      </Stack>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
        py={"100px"}
      >
        <Stack
          component={"header"}
          height={"-webkit-fill-available"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography component="h1" variant="h4">
              Florian IMBERT
            </Typography>
            <Typography variant="body2">©️imbertf-2023</Typography>
            <Typography
              component="p"
              variant="h6"
              style={
                darkMode === false
                  ? { color: theme.palette.tertiary.orange }
                  : { color: theme.palette.secondary.blueGreen }
              }
            >
              Web developer
            </Typography>
            <Stack>
              <Typography
                onClick={onPhoneClick}
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                06 84 08 88 79
              </Typography>
              <Typography
                onClick={onEmailClick}
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                f.imbert4@gmail.com
              </Typography>
            </Stack>
            <MediaLinks />
            <Link to="/">
              <List>
                <ListItem>
                  <Divider
                    sx={{
                      width: "50px",
                      mr: 2,
                      transition: "all 350ms ease",
                      borderColor: darkMode
                        ? "lightgrey"
                        : theme.palette.primary.light,
                    }}
                  />
                  <Typography
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    Accueil
                  </Typography>
                </ListItem>
              </List>
            </Link>
          </Box>
        </Stack>
      </Box>
      <Box
        component={"section"}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", xl: "row" }}
        mb={7}
      >
        <Stack>
          <Typography
            component={"h2"}
            variant="h2"
            style={
              darkMode === false
                ? { color: theme.palette.primary.light }
                : { color: theme.palette.secondary.blueGreen }
            }
          >
            Cooking App Project
          </Typography>
          <Stack direction={"row"} sx={{ mb: 2 }}>
            {Array.of(
              <FaReact style={{ color: theme.palette.secondary.blueGreen }} />,
              <FaNodeJs style={{ color: "green" }} />,
              <SiMui style={{ color: "dodgerBlue" }} />,
              <BiLogoMongodb style={{ color: "green" }} />
            ).map((icon, index) => (
              <Typography sx={{ mr: 1.5 }} key={index} fontSize={30}>
                {icon}
              </Typography>
            ))}
          </Stack>
          <Typography
            component={"p"}
            maxWidth={"500px"}
            style={
              darkMode === false
                ? { color: theme.palette.primary.light }
                : { color: theme.palette.secondary.main }
            }
          >
            Application de cuisine destiné aux étudiants d'écoles hôtelières. Ce
            projet a pour but d'aider les élèves à préparer leurs examens de
            cuisine en leurs fournissant les recettes de bases des programmes
            allant du CAP à la Licence.
          </Typography>
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
              justifyContent: "flex-start",
              mb: 3,
            }}
          >
            <Link
              to={`https://github.com/imbertf/cooking-app-project`}
              target="_blank"
              rel="noreferrer"
            >
              github.com/imbertf/cooking-app-project
            </Link>
          </Button>
          <Typography
            component={"p"}
            maxWidth={"500px"}
            style={
              darkMode === false
                ? { color: theme.palette.primary.light }
                : { color: theme.palette.secondary.main }
            }
          >
            Ce projet est en cours de réalisation et évolu au rythme de mes
            compétences actuelles et futures. L'objectif étant d'apporter des
            fonctions telles que:
          </Typography>
          <List sx={{ mx: 1 }}>
            <Grow in={true} timeout={2000}>
              <ListItem>
                <ListItemIcon
                  style={
                    darkMode === false
                      ? { color: theme.palette.tertiary.green }
                      : { color: theme.palette.secondary.blueGreen }
                  }
                >
                  <AdminPanelSettingsOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  style={
                    darkMode === false
                      ? { color: theme.palette.primary.light }
                      : { color: theme.palette.secondary.main }
                  }
                >
                  L'administrateur pourra gerer en CRUD les recettes,
                  utilisateurs et termes techniques
                </ListItemText>
              </ListItem>
            </Grow>
            <Grow in={true} timeout={3000}>
              <ListItem>
                <ListItemIcon
                  style={
                    darkMode === false
                      ? { color: theme.palette.tertiary.green }
                      : { color: theme.palette.secondary.blueGreen }
                  }
                >
                  <HowToRegOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  style={
                    darkMode === false
                      ? { color: theme.palette.primary.light }
                      : { color: theme.palette.secondary.main }
                  }
                >
                  Fonction Register - Login
                </ListItemText>
              </ListItem>
            </Grow>
            <Grow in={true} timeout={4000}>
              <ListItem>
                <ListItemIcon
                  style={
                    darkMode === false
                      ? { color: theme.palette.tertiary.green }
                      : { color: theme.palette.secondary.blueGreen }
                  }
                >
                  <BookmarkAddedOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  style={
                    darkMode === false
                      ? { color: theme.palette.primary.light }
                      : { color: theme.palette.secondary.main }
                  }
                >
                  Les utilsateurs pourront enregistrer leurs recettes en favori
                  afin de retrouver rapidement une recette sur laquelle ils
                  doivent travailler
                </ListItemText>
              </ListItem>
            </Grow>
          </List>
        </Stack>
        <Box
          sx={{
            width: { xs: "100%", md: "700px" },
          }}
        >
          <SliderImageComponent />
        </Box>
      </Box>
      <Box component={"section"}>
        <Stack spacing={3} mb={5} alignItems={"center"} textAlign={"justify"}>
          <Typography
            component={"h3"}
            variant="h4"
            style={
              darkMode === false
                ? { color: theme.palette.tertiary.orange }
                : { color: theme.palette.secondary.blueGreen }
            }
          >
            Pourquoi ce projet ?
          </Typography>
          <Typography
            component={"p"}
            maxWidth={"800px"}
            style={
              darkMode === false
                ? { color: theme.palette.primary.light }
                : { color: theme.palette.secondary.main }
            }
          >
            Ma passion pour la cuisine et la recherche d'un challenge pour
            améliorer mes compétences m'ont mené à développer cette App. <br />
            Je souhaitais me lancer dans un projet fullstack pour pouvoir
            réviser les quelques bases acquises lors de ma formation chez
            Openclassrooms. <br />
            Pour se remettre dans le contexte il faut remonter "quelques" années
            en arrière. Ayant fait mes études à l'école hôtelière d'Avignon, je
            repensais à cette periode et me suis posé la question "quel type
            d'application aurait pu m'être utile durant mes études?"
          </Typography>
          <Typography
            component={"p"}
            maxWidth={"800px"}
            style={
              darkMode === false
                ? { color: theme.palette.primary.light }
                : { color: theme.palette.secondary.main }
            }
          >
            Nous avions nos travaux pratiques en cuisine pour travailler sur des
            recettes de bases de la gastronomie Française mais également
            beaucoup de cours théoriques qui y étaient liés. Parmis ces cours,
            nous devions apprendre les termes techniques culinaires qui nous
            permettaient de lire nos recettes.
            <br /> "L'apprentissage par coeur" n'étant pas forcément mon domaine
            de prédilection j'arrivais à retenir ces termes uniquement en les
            retrouvant au fil des recettes travaillées.
          </Typography>
          <Typography
            component={"p"}
            maxWidth={"800px"}
            style={
              darkMode === false
                ? { color: theme.palette.primary.light }
                : { color: theme.palette.secondary.main }
            }
          >
            La base du projet était posée, je partais sur un lexique de termes
            techniques facilement accessibles à tout moment sur tout type de
            support. Les étudiants pourraient réviser le termes cependant il
            restait un problème. Si j'avais ce type d'application web, je me
            serais retrouvé dans le même contexte qu'à l'époque à savoir des
            listes de termes et leurs définitions... et ensuite ?
          </Typography>
          <Typography
            component={"p"}
            maxWidth={"800px"}
            style={
              darkMode === false
                ? { color: theme.palette.primary.light }
                : { color: theme.palette.secondary.main }
            }
          >
            La suite s'est naturellement imposée, il fallait lier ces termes
            culinaires avec les recettes dans lesquelles on pourrait les
            rencontrer.
          </Typography>
          <Typography
            component={"p"}
            maxWidth={"800px"}
            style={{
              color:
                darkMode === false
                  ? theme.palette.primary.light
                  : theme.palette.secondary.main,
              marginBottom: "30px",
            }}
          >
            Le coeur de l'application était là et me permettait de travailler
            sur une application fullstack intéressante à développer.
          </Typography>
          <Typography
            component={"h6"}
            variant="h6"
            maxWidth={"800px"}
            style={{
              color:
                darkMode === false
                  ? theme.palette.tertiary.orange
                  : theme.palette.secondary.main,
            }}
          >
            Stack technique du projet:
          </Typography>
          <ScrollTrigger
            onEnter={handleEnterViewport}
            onExit={handleExitViewport}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <Grow in={inView} timeout={2000}>
              <Stack
                sx={{
                  border:
                    darkMode === false
                      ? `1px solid ${theme.palette.tertiary.orange}`
                      : `1px solid ${theme.palette.secondary.skyBlue}`,
                  borderRadius: "4px",
                  padding: "5px",
                  margin: "5px",
                  minHeight: "150px",
                }}
              >
                <Paper
                  sx={{
                    width: "100px",
                    textAlign: "center",
                    borderRadius: 0,
                    boxShadow:
                      darkMode === false
                        ? `0 3px 1px -1px ${theme.palette.tertiary.orange}`
                        : `0 3px 1px -1px ${theme.palette.secondary.blueGreen}`,
                  }}
                >
                  <Typography
                    component={"p"}
                    maxWidth={"800px"}
                    style={
                      darkMode === false
                        ? { color: theme.palette.tertiary.orange }
                        : { color: theme.palette.secondary.blueGreen }
                    }
                  >
                    Frontend
                  </Typography>
                </Paper>
                <List sx={{ mx: 1 }}>
                  <ListItem>
                    <ListItemIcon
                      style={{
                        minWidth: "50px",
                      }}
                    >
                      <FaReact
                        style={{
                          color: theme.palette.secondary.blueGreen,
                          fontSize: "25px",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      style={
                        darkMode === false
                          ? { color: theme.palette.primary.light }
                          : { color: theme.palette.secondary.main }
                      }
                    >
                      React
                    </ListItemText>
                  </ListItem>
                </List>
                <List sx={{ mx: 1 }}>
                  <ListItem>
                    <ListItemIcon
                      style={{
                        minWidth: "50px",
                      }}
                    >
                      <SiMui
                        style={{ color: "dodgerBlue", fontSize: "25px" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      style={
                        darkMode === false
                          ? { color: theme.palette.primary.light }
                          : { color: theme.palette.secondary.main }
                      }
                    >
                      Material ui
                    </ListItemText>
                  </ListItem>
                </List>
              </Stack>
            </Grow>
            <Grow in={inView} timeout={3000}>
              <Stack
                sx={{
                  border:
                    darkMode === false
                      ? `1px solid ${theme.palette.tertiary.orange}`
                      : `1px solid ${theme.palette.secondary.skyBlue}`,
                  borderRadius: "4px",
                  padding: "5px",
                  margin: "5px",
                  minHeight: "150px",
                }}
              >
                <Paper
                  sx={{
                    width: "100px",
                    textAlign: "center",
                    borderRadius: 0,
                    boxShadow:
                      darkMode === false
                        ? `0 3px 1px -1px ${theme.palette.tertiary.orange}`
                        : `0 3px 1px -1px ${theme.palette.secondary.blueGreen}`,
                  }}
                >
                  <Typography
                    component={"p"}
                    maxWidth={"500px"}
                    style={
                      darkMode === false
                        ? { color: theme.palette.tertiary.orange }
                        : { color: theme.palette.secondary.blueGreen }
                    }
                  >
                    Backend
                  </Typography>
                </Paper>
                <List sx={{ mx: 1 }}>
                  <ListItem>
                    <ListItemIcon
                      style={{
                        minWidth: "50px",
                      }}
                    >
                      <FaNodeJs style={{ color: "green", fontSize: "25px" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={
                        darkMode === false
                          ? { color: theme.palette.primary.light }
                          : { color: theme.palette.secondary.main }
                      }
                    >
                      Node js
                    </ListItemText>
                  </ListItem>
                </List>
                <List sx={{ mx: 1 }}>
                  <ListItem>
                    <ListItemIcon
                      style={{
                        minWidth: "50px",
                      }}
                    >
                      <SiExpress
                        style={{ color: "deeppink", fontSize: "25px" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      style={
                        darkMode === false
                          ? { color: theme.palette.primary.light }
                          : { color: theme.palette.secondary.main }
                      }
                    >
                      Express js
                    </ListItemText>
                  </ListItem>
                </List>
              </Stack>
            </Grow>
            <Grow in={inView} timeout={4000}>
              <Stack
                sx={{
                  border:
                    darkMode === false
                      ? `1px solid ${theme.palette.tertiary.orange}`
                      : `1px solid ${theme.palette.secondary.skyBlue}`,
                  borderRadius: "4px",
                  padding: "5px",
                  margin: "5px",
                  minHeight: "150px",
                }}
              >
                <Paper
                  sx={{
                    width: "100px",
                    textAlign: "center",
                    borderRadius: 0,
                    boxShadow:
                      darkMode === false
                        ? `0 3px 1px -1px ${theme.palette.tertiary.orange}`
                        : `0 3px 1px -1px ${theme.palette.secondary.blueGreen}`,
                  }}
                >
                  <Typography
                    component={"p"}
                    maxWidth={"500px"}
                    style={
                      darkMode === false
                        ? { color: theme.palette.tertiary.orange }
                        : { color: theme.palette.secondary.blueGreen }
                    }
                  >
                    BDD NoSQL
                  </Typography>
                </Paper>
                <List sx={{ mx: 1 }}>
                  <ListItem>
                    <ListItemIcon
                      style={{
                        minWidth: "50px",
                      }}
                    >
                      <BiLogoMongodb
                        style={{ color: "green", fontSize: "25px" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      style={
                        darkMode === false
                          ? { color: theme.palette.primary.light }
                          : { color: theme.palette.secondary.main }
                      }
                    >
                      Mongo DB
                    </ListItemText>
                  </ListItem>
                </List>
              </Stack>
            </Grow>
          </ScrollTrigger>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectPage;
