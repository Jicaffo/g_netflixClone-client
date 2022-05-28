import { React, useState, useEffect } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  capitalize,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useProfiles } from "../../Contexts/profilesContext";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#141414",
  },
  container: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "baseline",
  },
  editarPerfil: {
    // paddingLeft: "2.5em",
    fontSize: "3em",
    color: "#ccc",
    // margin-block-start: 0.67em;
    // margin-block-end: 0.67em;
    // margin-inline-start: 0px;
    // margin-inline-end: 0px;
    // font-weight: bold;
  },
  profileMetadata: {
    display: "flex",
    padding: "1em 0",
    borderTop: "1px solid #333",
    borderBottom: "1px solid #333",
    marginTop: "-30px",
    // maxWidth: "45em",
    justifyContent: "center",
  },
  mainProfileAvatar: {
    whiteSpace: "nowrap",
    marginRight: "1.5vw",
    width: "8vw",
    minWidth: "80px",
    maxWidth: "180px",
  },
  itemsGrid: {
    minWidth: "54px",
    minHeight: "54px",
    maxWidth: "100px",
    width: "100%",
    borderRadius: "4px",
  },
  svgEditIcon: {
    position: "relative",
    marginLeft: "-6rem",
    width: "1.5rem",
    height: "1.5rem",
    maxWidth: "45px",
    maxHeight: "45px",
    backgroundColor: "rgba(0,0,0,.7)",
    filter: "drop-shadow(1px 1px 2px #000)",
    borderRadius: "5rem",
    cursor: "pointer",
    // bottom: "7%",
    left: "5%",
    border: "none",
    top: "-2%",
  },
  profileNameEntry: {
    width: "15em",
    height: "1.5em",
    backgroundColor: "#666",
    border: "1px solid transparent",
    outline: "none",
    margin: "0 0.8em 0 0",
    padding: "0.2em 0.6em",
    color: "#fff",
    fontSize: "1.3vw",
    // boxSizing: "border-box",
    textIndent: "0.1vw",
    lineHeight: "normal",
  },
  profileDropDownLabel: {
    marginTop: "1rem",
    fontSize: "1.3vw",
    color: "#ccc",
    textAlign: "left",
    fontWeight: "400",
  },
  formControl: {
    minWidth: "120",
  },
  selectIdioma: {
    width: "180px",
    paddingLeft: "10px",
    paddingTop: "3px",
    paddingBottom: "1px",
    color: "white",
    backgroundColor: "black",
    border: "solid 1px #fff",
    letterSpacing: "1px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,.1)",
    },
  },
  optionIdioma: {
    letterSpacing: "3px",
    backgroundColor: "black",
  },
  profileEntryRestrictions: {
    margin: "1vw 0 0 0",
    borderTop: "1px solid #333",
    // padding: "1.5vw 0 0 0",
    fontSize: "1vw",
  },
  profileMaturityLabel: {
    borderRadius: "2px",
    backgroundColor: "#333",
    padding: "9px 10px",
    fontWeight: "700",
    marginRight: "265px",
    listStyleType: "none",
  },
  buttonEditar: {
    color: theme.palette.gray3,
    border: `solid 1px ${theme.palette.gray3}`,
    marginTop: "1em",
    transition: "none",
    textTransform: "capitalize",
    borderRadius: "0",
    padding: "0.2em 1.5em",
    letterSpacing: "2px",
    fontSize: "1vw",
    "&:hover": {
      color: theme.palette.contrastText,
      border: `solid 1px ${theme.palette.contrastText}`,
    },
  },
  autoplayOption: {
    display: "flex",
    alignItems: "center",
    margin: "5px 0",
    fontSize: ".1vw",
    position: "relative",
  },
  checkNextEpisode: {
    display: "none",
  },
  checkVideoMerch: {
    display: "none",
  },
  LabelNextEpisode: {
    display: "none",
    border: "1px solid #333",
    color: "#99a1a7",
    display: "flex",
    marginRight: "5px",
  },
  LabelVideoMerch: {
    display: "none",
    border: "1px solid #333",
    color: "#99a1a7",
    display: "flex",
    marginRight: "5px",
  },
  // svgIconNextEpisode: {
  //   width: "100%",
  //   height: "100%",
  //   pointerEvents: "none",
  //   overflow: "hidden",
  //   border: "1px solid #333",
  //   color: "white",
  // },
  svgIconNextEpisode: {
    transform: "scale(1)",
    border: "solid 1px transparent",
    margin: "0 -1px",
    color: "#99a1a7",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
  svgIconVideoMerch: {
    transform: "scale(1)",
    border: "solid 1px transparent",
    margin: "0 -1px",
    color: "#99a1a7",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
  nextEpisodeMarker: {
    fontWeight: "400",
    fontSize: ".86vw",
    position: "relative",
    display: "block",
  },
  videoMerchMarker: {
    fontWeight: "400",
    fontSize: ".86vw",
    position: "relative",
    display: "block",
  },
  buttonCancelar: {
    color: theme.palette.gray3,
    border: `solid 1px ${theme.palette.gray3}`,
    margin: "2.5em 1.5em 1em 0",
    transition: "none",
    display: "inline-block",
    fontSize: "15px",
    borderRadius: "0",
    textTransform: "capitalize",
    padding: "0.2em 1.5em",
    letterSpacing: "2px",
    "&:hover": {
      color: theme.palette.contrastText,
      border: `solid 1px ${theme.palette.contrastText}`,
    },
  },
  buttonEliminar: {
    color: theme.palette.gray3,
    border: `solid 1px ${theme.palette.gray3}`,
    margin: "2.5em 1.5em 1em 0",
    transition: "none",
    display: "inline-block",
    fontSize: "15px",
    borderRadius: "0",
    textTransform: "capitalize",
    padding: "0.2em 1.5em",
    letterSpacing: "2px",
    "&:hover": {
      color: theme.palette.contrastText,
      border: `solid 1px ${theme.palette.contrastText}`,
    },
  },
  buttonGuardar: {
    display: "inline-block",
    margin: "2.5em 1.5em 1em 0",
    fontSize: "15px",
    padding: "0.2em 1.5em",
    letterSpacing: "2px",
    cursor: "pointer",
    transition: "none",
    textTransform: "capitalize",
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #fff",
    borderRadius: "0",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#c00",
      border: "1px solid #c00",
      color: "#fff",
    },
  },
}));

const EditUserProfile = ({ onAction }) => {
  const classes = useStyles();

  // const { userName } = useParams();
  const { userId } = useParams();

  const [stateUserName, stateSetUserName] = useState("userName");
  const [checkedNextEpisode, setNextEpisodeChecked] = useState(true);
  const [checkedVideoMerch, setVideoMerchChecked] = useState(true);

  const handleChangeUserName = (e) => {
    stateSetUserName(e.target.value);
  };

  useEffect(() => {
    console.log("Se modifico el USERNAME");
  }, [stateUserName]);

  const handleChangeNextEpisode = (event) => {
    setNextEpisodeChecked(event.target.checked);
  };

  const handleChangeVideoMerch = (event) => {
    setVideoMerchChecked(event.target.checked);
  };

  const { deleteProfile } = useProfiles();

  const handleDelete = (userId) => {
    deleteProfile(userId);
  };

  return (
    <>
      <div style={{ backgroundColor: "#141414" }}>
        <Box className={classes.root}>
          {/* <Container maxWidth="dm" className={classes.container}>      */}
          <Container maxWidth="sm" style={{ maxWidth: "43em" }}>
            <h1 className={classes.editarPerfil}>Editar perfil</h1>
          </Container>
        </Box>

        {/* <Container maxWidth="dm" className={classes.container}>         */}
        <Container
          maxWidth="sm"
          style={{ maxWidth: "43em", backgroundColor: "#141414" }}
        >
          <Box className={classes.profileMetadata}>
            <Box className={classes.mainProfileAvatar}>
              <img
                className={classes.itemsGrid}
                src="https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71"
                alt="Profile Image"
              />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.svgEditIcon}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Box>

            <Box className={classes.root}>
              {/* <Container >    */}
              <input
                type="text"
                name="userName"
                className={classes.profileNameEntry}
                onChange={(e) => handleChangeUserName(e)}
                value={stateUserName}
              />
              <Typography className={classes.profileDropDownLabel}>
                Idioma:
              </Typography>

              <FormControl className={classes.formControl}>
                <select className={classes.selectIdioma}>
                  <option
                    className={classes.optionIdioma}
                    value="Bahasa Indonesia>"
                  >
                    Bahasa Indonesia
                  </option>
                  <option
                    className={classes.optionIdioma}
                    value="Bahasa Melayu"
                  >
                    Bahasa Melayu
                  </option>
                  <option className={classes.optionIdioma} value="Dansk">
                    Dansk
                  </option>
                  <option className={classes.optionIdioma} value="Deutsch">
                    Deutsch
                  </option>
                  <option className={classes.optionIdioma} value="English">
                    English
                  </option>
                  <option
                    className={classes.optionIdioma}
                    selected
                    value="Español"
                  >
                    Español
                  </option>
                  <option className={classes.optionIdioma} value="Français">
                    Français
                  </option>
                  <option className={classes.optionIdioma} value="Hrvatski">
                    Hrvatski
                  </option>
                  <option className={classes.optionIdioma} value="Italiano">
                    Italiano
                  </option>
                  <option className={classes.optionIdioma} value="Magyar">
                    Magyar
                  </option>
                  <option className={classes.optionIdioma} value="Nederlands">
                    Nederlands
                  </option>
                  <option className={classes.optionIdioma} value="Norsk bokmål">
                    Norsk bokmål
                  </option>
                  <option className={classes.optionIdioma} value="Polski">
                    Polski
                  </option>
                  <option className={classes.optionIdioma} value="Português">
                    Português
                  </option>
                  <option className={classes.optionIdioma} value="Română">
                    Română
                  </option>
                  <option className={classes.optionIdioma} value="Suomi">
                    Suomi
                  </option>
                  <option className={classes.optionIdioma} value="Svenska">
                    Svenska
                  </option>
                  <option className={classes.optionIdioma} value="Tiếng Việt">
                    Tiếng Việt
                  </option>
                  <option className={classes.optionIdioma} value="Türkçe">
                    Türkçe
                  </option>
                  <option className={classes.optionIdioma} value="Čeština">
                    Čeština
                  </option>
                  <option className={classes.optionIdioma} value="Ελληνικά">
                    Ελληνικά
                  </option>
                  <option className={classes.optionIdioma} value="Русский">
                    Русский
                  </option>
                  <option className={classes.optionIdioma} value="Українська">
                    Українська
                  </option>
                  <option className={classes.optionIdioma} value="עברית">
                    עברית
                  </option>
                  <option className={classes.optionIdioma} value="العربية">
                    العربية
                  </option>
                  <option className={classes.optionIdioma} value="हिन्दी">
                    हिन्दी
                  </option>
                  <option className={classes.optionIdioma} value="ไทย">
                    ไทย
                  </option>
                  <option className={classes.optionIdioma} value="中文">
                    中文
                  </option>
                  <option className={classes.optionIdioma} value="日本語">
                    日本語
                  </option>
                  <option className={classes.optionIdioma} value="한국어">
                    한국어
                  </option>
                </select>
              </FormControl>
              <div className={classes.profileEntryRestrictions}>
                <Typography className={classes.profileDropDownLabel}>
                  Configuración por edad:
                </Typography>
                <ul className={classes.profileMaturityLabel}>
                  <li>Todas las clasificaciones por edad</li>
                </ul>
                <p>
                  Mostrar títulos de <b>todas las clasificaciones</b> en este
                  perfil.
                </p>
                <Button className={classes.buttonEditar}>Editar</Button>
              </div>
              <div className={classes.profileEntryRestrictions}>
                <Typography className={classes.profileDropDownLabel}>
                  Controles de reproducción automática
                </Typography>

                <div className={classes.autoplayOption}>
                  <input
                    type="checkbox"
                    id="nextEpisode-profile"
                    onChange={handleChangeNextEpisode}
                    className={classes.checkNextEpisode}
                  />
                  <label
                    htmlFor="nextEpisode-profile"
                    className={classes.LabelNextEpisode}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={classes.svgIconNextEpisode}
                    >
                      {checkedNextEpisode ? (
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                          fill="currentColor"
                        ></path>
                      ) : null}
                    </svg>
                  </label>

                  <span
                    className={classes.nextEpisodeMarker}
                    role="checkbox"
                    aria-checked="true"
                    tabindex="0"
                  >
                    Reproducir automáticamente el siguiente episodio de una
                    serie en todos los dispositivos.
                  </span>
                </div>

                <div className={classes.autoplayOption}>
                  <input
                    type="checkbox"
                    id="videomerch-profile"
                    onChange={handleChangeVideoMerch}
                    className={classes.checkVideoMerch}
                  />
                  <label
                    htmlFor="videomerch-profile"
                    className={classes.LabelVideoMerch}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={classes.svgIconVideoMerch}
                    >
                      {checkedVideoMerch ? (
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                          fill="currentColor"
                        ></path>
                      ) : null}
                    </svg>
                  </label>

                  <span
                    className={classes.videoMerchMarker}
                    role="checkbox"
                    aria-checked="true"
                    tabindex="0"
                  >
                    Se reproducen automáticamente los avances mientras navegas
                    (en todos los dispositivos).
                  </span>
                </div>
              </div>

              {/* </Container> */}
            </Box>
          </Box>

          {/* <Container maxWidth="md">    */}
          <Button className={classes.buttonGuardar} href="/manage-profiles">
            Guardar
          </Button>
          <Button className={classes.buttonCancelar} href="/manage-profiles">
            Cancelar
          </Button>
          {/* Por ahora para el renderizado se filtra por nombre "José" estatico, ya que el user principal no debe tener el boton de eliminar perfil */}
          {/* {userName !== "José" ? ( */}
          {userId !== "623ba68812028cc08244e506" ? (
            <Button
              className={classes.buttonEliminar}
              href="/manage-profiles"
              onClick={() => handleDelete(userId)}
            >
              Eliminar perfil
            </Button>
          ) : null}

          {/* </Container>             */}
        </Container>
      </div>
    </>
  );
};

export default EditUserProfile;
