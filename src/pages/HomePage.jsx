// react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// provider
import { DarkModeContext } from "../utils/ThemeProvider";

// component
import ThemeModeButton from "../components/buttons/ThemeModeButtonComponent";
import MediaLinks from "../components/MediaLinksComponent";

// material ui
import {
  Box,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

// icons
import { FaReact, FaSass, FaNodeJs, FaAmazon } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { GiRadarSweep } from "react-icons/gi";
import { BiLogoMongodb } from "react-icons/bi";

// components
import NavBarComponent from "../components/NavBarComponent";
import ExperienceCardComponent from "../components/cards/ExperienceCardComponent";
import DownloadFileButton from "../components/buttons/DownloadFileButtonComponent";
import ProjectCardComponent from "../components/cards/ProjectCardComponent";
import ScrollToTopButtonComponent from "../components/buttons/ScrollToTopButtonComponent";

// images
import cap_logo from "../medias/images/cookingAppProject/logo.png";
import kasa_logo from "../medias/images/kasa/logo.png";
import piiquante_logo from "../medias/images/piiquante/piiquante.jpg";
import ContactForm from "../components/ContactForm";

// functions
function onPhoneClick() {
  window.open(`tel:+33684088879`);
}

function onEmailClick() {
  window.open(`mailto:f.imbert4@gmail.com`);
}

const HomePage = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const theme = useTheme();

  return (
    <Box>
      <Stack position={"fixed"} right={20} zIndex={1}>
        <ThemeModeButton />
        <ScrollToTopButtonComponent />
      </Stack>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent={"flex-end"}
        pt={"100px"}
      >
        <Stack
          component={"header"}
          width={{ xs: "100%", lg: "50%" }}
          height={"-webkit-fill-available"}
          left={160}
          mb={5}
          position={{ lg: "fixed" }}
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
            <Stack direction={"row"} fontSize={35} spacing={1}>
              <FaReact style={{ color: theme.palette.secondary.blueGreen }} />
              <SiMui style={{ color: "dodgerBlue" }} />
              <FaSass style={{ color: "deeppink" }} />
              <FaNodeJs style={{ color: "green" }} />
              <BiLogoMongodb style={{ color: "green" }} />
            </Stack>
            <NavBarComponent />
          </Box>
        </Stack>
        <Box
          mt={1}
          component={"main"}
          width={{ xs: "100%", lg: "45%" }}
          id="about"
        >
          <Stack spacing={2} mb={10}>
            <Typography>
              <span
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                Ce que je peux vous apporter
              </span>{" "}
            </Typography>
            <Typography textAlign={"justify"}>
              Une capacité de{" "}
              <span
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                gestion d'équipe
              </span>{" "}
              acquise au cours de plus de 3 ans d'experience chez Amazon et 6
              années dans l'armée au profit d'un service de renseignement.{" "}
              <br />
              <br />
              <span
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                L'autonomie
              </span>{" "}
              et la{" "}
              <span
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                gestion des priorités
              </span>{" "}
              développés dans le secteur de l'hôtellerie restauration pendant 6
              ans La{" "}
              <span
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                mise en place et le suivi de projet
              </span>{" "}
              en équipe dans le secteur de la supply chain et le transport.
              <br />
              <br />
              Ma{" "}
              <span
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                curiosité
              </span>{" "}
              ainsi que mon besoin{" "}
              <span
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                d'apprentissage continu
              </span>{" "}
              ont été satisfaits par de nombreux voyages professionnels et
              personnels à l'étranger. Le goût du voyage et la découverte de
              cultures me font apprécier de{" "}
              <span
                style={
                  darkMode === false
                    ? { color: theme.palette.tertiary.orange }
                    : { color: theme.palette.secondary.blueGreen }
                }
              >
                travailler en équipe multiculturelle et internationale
              </span>
              .
            </Typography>

            <>
              <Typography>
                <span
                  style={
                    darkMode === false
                      ? { color: theme.palette.tertiary.orange }
                      : { color: theme.palette.secondary.blueGreen }
                  }
                >
                  Soft Skills
                </span>{" "}
              </Typography>
              <List>
                <ListItem sx={{ p: "0" }}>
                  <Typography>Ouverture d'esprit</Typography>
                </ListItem>
                <ListItem sx={{ p: "0" }}>
                  <Typography>Curiosité</Typography>
                </ListItem>
                <ListItem sx={{ p: "0" }}>
                  <Typography>Aisance relationnelle</Typography>
                </ListItem>
                <ListItem sx={{ p: "0" }}>
                  <Typography>Esprit d'équipe</Typography>
                </ListItem>
                <ListItem sx={{ p: "0" }}>
                  <Typography>Leadership</Typography>
                </ListItem>
              </List>
            </>
          </Stack>

          <Box component={"section"} mb={15} id="experiences">
            <Stack>
              <ExperienceCardComponent
                date={"mars - actuel"}
                title={"Web Developer"}
                text={
                  "Création de plusieurs sites vitrines pour des entreprises en Single Page Application, React js. Réunion en visio pour définir les besoins du client, élaborer la charte graphique, le contenu et convenir d'un le délais de réalisation."
                }
                icons={[
                  <FaReact
                    style={{ color: theme.palette.secondary.blueGreen }}
                  />,
                ]}
                links={[
                  "adhterrassement.fr",
                  "masweetdecobymd.fr",
                  "delamesenfils.fr",
                  "transports-rauwel.fr",
                ]}
              />
              <ExperienceCardComponent
                date={"2019 - 2023"}
                title={"Superviseur logistique, Amazon"}
                text={
                  'Encadrement d\'une équipe logistique et transport. Gestion et suivit de projets. Réalisation du planning et suivit de formation des "associates". Exploitation de KPI afin de définir les objectifs quotidiens. Gestion de flux logistique et utilisation de TMS et WMS. Relation client avec les transporteurs'
                }
                icons={[
                  <FaAmazon style={{ color: theme.palette.tertiary.orange }} />,
                ]}
                links={[null]}
              />
              <ExperienceCardComponent
                date={"2013 - 2019"}
                title={"Sous-Officier renseignement, Armée"}
                text={
                  "Collecte, traitement, exploitation et diffusion du renseignement. Opérations Extérieures. Travail en équipe internationale"
                }
                icons={[
                  <GiRadarSweep
                    style={{
                      color:
                        darkMode === false
                          ? theme.palette.tertiary.green
                          : theme.palette.secondary.blueGreen,
                    }}
                  />,
                ]}
                links={[null]}
              />
              <DownloadFileButton />
            </Stack>
          </Box>
          <Box component={"section"} mb={15} id="projects">
            <Link to={"/project"}>
              <ProjectCardComponent
                image={cap_logo}
                date={"juillet 2023 - actuel"}
                title={"MERN Stack App"}
                text={
                  "A destination des étudiants en école hôtelières. Accès aux recettes nécéssaires à la préparation des diplômes allant du CAP à la Licence. Les étudiants peuvent consulter un lexique des termes culinaires et disposent d'un bloc note. L'administrateur à quand à lui accès à un tableau de bord permettant l'ajout, la modification et la suppression des utilisateurs, termes techniques et recettes."
                }
                icons={[
                  <FaReact
                    style={{ color: theme.palette.secondary.blueGreen }}
                  />,
                  <FaNodeJs style={{ color: "green" }} />,
                  <SiMui style={{ color: "dodgerBlue" }} />,
                  <BiLogoMongodb style={{ color: "green" }} />,
                ]}
                link={"github.com/imbertf/cooking-app-project"}
              />
            </Link>
            <ProjectCardComponent
              image={kasa_logo}
              date={"nov 2022 - dec 2022"}
              title={"Frontend App"}
              text={
                "Création d'une application web de location immobilière. Projet de formation, OpenClassrooms. Create React App, React Router, composants réutilisables, récupération des data logements à partir d'un fichier JSON via Axios et intégration responsives des maquettes Figma."
              }
              icons={[
                <FaReact
                  style={{ color: theme.palette.secondary.blueGreen }}
                />,
                <FaSass style={{ color: "deeppink" }} />,
              ]}
              link={"github.com/imbertf/kasa/tree/main"}
            />
            <ProjectCardComponent
              image={piiquante_logo}
              date={"oct 2022 - nov 2022"}
              title={"API REST sécurisée"}
              text={
                "Développement d'une API REST sécurisée pour une application d'avis gastronomiques. Projet de formation, OpenClassrooms. Mise en place d'un modèle CRUD et test sur Postman. Création du parcours utilisateur, modèle, routes, controllers. Securisation avec un middleware Authorize, JWT, Bcrypt, Helmet, Unique validator, Email validator et Password validator"
              }
              icons={[
                <FaNodeJs style={{ color: "green" }} />,
                <BiLogoMongodb style={{ color: "green" }} />,
              ]}
              link={"github.com/imbertf/Piiquante_API/tree/master"}
            />
          </Box>
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
