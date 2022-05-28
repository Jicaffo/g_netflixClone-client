import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Typography,
  Container,
  Box,
  Button,
  capitalize,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useProfiles } from "../../Contexts/profilesContext";

import "../../Styles/index.css";
import Checkbox from "@material-ui/core/Checkbox";
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
  },
  container: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "baseline",
  },
  centerDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: "100",
    position: "absolute",
    top: "-5em",
    left: "-10em",
    right: "0",
    bottom: "0",
    textAlign: "left",
    backgroundColor: "#141414",
  },
  ProfileActionsContainer: {
    textAlign: "left",
    position: "relative",
  },
  TitleAddProfile: {
    margin: "0",
    fontWeight: "400",
    fontSize: "4vw",
    textAlign: "left",
    lineHeight: "1.2",
    letterSpacing: "1.5px",
  },
  SubTitleProfile: {
    fontSize: "1.3vw",
    color: "#666",
    display: "block",
    fontWeight: "400",
  },
  profileMetadata: {
    display: "flex",
    padding: "2em 0",
    borderTop: "1px solid #333",
    borderBottom: "1px solid #333",
    // marginTop: "-30px",
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
  // profileDropDownLabel: {
  //   marginTop: "1rem",
  //   fontSize: "1.3vw",
  //   color: "#ccc",
  //   textAlign: "left",
  //   fontWeight: "400",
  // },
  itemsGrid: {
    minWidth: "54px",
    minHeight: "54px",
    maxWidth: "200px",
    width: "100%",
    borderRadius: "4px",
  },
  AddKidsOption: {
    display: "flex",
    alignItems: "center",
    margin: "5px 0",
    position: "relative",
  },
  checkAddKids: {
    display: "none",
  },
  LabelAddKids: {
    display: "none",
    border: "1px solid #333",
    color: "#99a1a7",
    display: "flex",
    marginRight: "5px",
  },
  profileAddParent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  KidsProfileTooltip: {
    position: "absolute",
    left: "-8.5em",
    bottom: "3em",
    width: "18em",
    fontSize: "1vw",
    border: "1px solid black",
    backgroundColor: "#fff",
    color: "#000",
    padding: "0.8em",
    textAlign: "center",
    right: "-49px",
    transition: "opacity .3s linear 50ms,z-index 1ms linear 350ms",
    opacity: "0",
    display: "block",
    "&::after": {
      top: "100%",
      left: "50%",
      border: "solid transparent",
      content: '""',
      height: "0",
      width: "0",
      position: "absolute",
      pointerEvents: "none",
      borderTopColor: "#fff",
      borderWidth: "0.7em",
      marginLeft: "-0.7em",
    },
  },
  svgIcon: {
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    overflow: "hidden",
    border: "1px solid #333",
    color: "#99a1a7",
  },
  AddKidsMarker: {
    fontWeight: "400",
    fontSize: "18px",
    position: "relative",
    display: "block",
    "&:hover $KidsProfileTooltip": {
      transition: "opacity .3s linear 50ms,z-index 1ms linear 350ms",
      opacity: "1",
    },
  },
  ProfileButton: {
    display: "inline-block",
    margin: "2.5em 1.5em 1em 0",
    fontSize: "15px",
    padding: "0.7em 1.5em",
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
    "&:active": {
      backgroundColor: "#c00",
      border: "1px solid #c00",
      color: "#fff",
    },
  },
  ProfileCancelButton: {
    color: theme.palette.gray3,
    border: `solid 1px ${theme.palette.gray3}`,
    margin: "2.5em 1.5em 1em 0",
    transition: "none",
    display: "inline-block",
    fontSize: "15px",
    borderRadius: "0",
    textTransform: "capitalize",
    padding: "0.7em 1.5em",
    letterSpacing: "2px",
    "&:hover": {
      color: theme.palette.contrastText,
      border: `solid 1px ${theme.palette.contrastText}`,
    },
  },
}));

const AddUserProfile = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  // const [input, setInput] = useState(false);

  // const handleInputChange = event => {
  //   setInput(event.target.checked);
  // };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const createProfile = useProfiles();
  const history = useHistory();

  return (
    <>
      <Formik
        initialValues={{
          userName: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string().required(
            "El nombre de usuario es obligatorio"
          ),
        })}
        onSubmit={async (values, actions) => {
          // console.log(values);
          await createProfile(values);
          history.push("/manage-profiles");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Box className={classes.root}>
              <Container maxWidth="xs">
                <div className={classes.centerDiv}>
                  <div className={classes.ProfileActionsContainer}>
                    <h1 className={classes.TitleAddProfile}>Agregar perfil</h1>
                    <h2 className={classes.SubTitleProfile}>
                      Agrega un perfil para otra persona que ve Netflix.
                    </h2>

                    <Box className={classes.profileMetadata}>
                      <div className={classes.profileAddParent}>
                        <Box className={classes.mainProfileAvatar}>
                          <img
                            className={classes.itemsGrid}
                            src="https://occ-0-875-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc"
                            alt="Profile Image"
                          />
                        </Box>

                        <Field
                          type="text"
                          name="userName"
                          className={classes.profileNameEntry}
                          placeholder="Nombre"
                        />
                        {/* <Typography className={classes.profileDropDownLabel}>
          </Typography>  */}
                        <div className={classes.AddKidsOption}>
                          <input
                            type="checkbox"
                            id="add-kids-profile"
                            onChange={handleChange}
                            className={classes.checkAddKids}
                          />
                          <label
                            htmlFor="add-kids-profile"
                            className={classes.LabelAddKids}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={classes.svgIcon}
                            >
                              {checked ? (
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
                            className={classes.AddKidsMarker}
                            role="checkbox"
                            aria-checked="true"
                            tabindex="0"
                          >
                            ¿Niños?
                            <span className={classes.KidsProfileTooltip}>
                              Si se selecciona esta opción, este perfil solo
                              puede ver películas y series clasificadas para
                              menores de 12&nbsp;años.
                            </span>
                          </span>
                        </div>
                      </div>
                    </Box>

                    {/* <Link
                      to="/manage-profiles"
                      style={{ textDecoration: "none" }}
                    > */}
                    <button
                      className={classes.ProfileButton}
                      tabindex="0"
                      role="button"
                      type="submit"
                    >
                      Continuar
                    </button>
                    {/* </Link> */}

                    <Link
                      to="/manage-profiles"
                      style={{ textDecoration: "none" }}
                    >
                      <span
                        className={classes.ProfileCancelButton}
                        tabindex="0"
                        role="button"
                      >
                        Cancelar
                      </span>
                    </Link>
                  </div>
                </div>
              </Container>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddUserProfile;
