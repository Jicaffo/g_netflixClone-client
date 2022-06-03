import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Container,
  Box,
  Button,
  capitalize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useLocation } from "react-router-dom";
import ApiCallsContext from '../../Contexts/ApiCallsContext'
import UserDataContext from '../../Contexts/UserDataContext'
import { get, post } from '../../Services/apiCalls'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
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
    marginTop: "10em",
  },
  titleProfiles: {
    color: `${theme.palette.gray3}`,
  },
  itemsAvatar: {
    display: "flex",
    marginTop: "2em",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  itemsProfiles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: "1rem",
    marginRight: "1rem",
    alignItems: "center",
    "&:hover h6": {
      color: theme.palette.contrastText,
    },
    "&:hover img": {
      boxShadow: `0px 0px 0px 2px ${theme.palette.contrastText}`,
    },
  },
  itemsGrid: {
    minWidth: "84px",
    minHeight: "84px",
    maxWidth: "150px",
    width: "100%",
    borderRadius: "4px",
  },
  buttonAdministrar: {
    color: theme.palette.gray3,
    border: `solid 1px ${theme.palette.gray3}`,
    marginTop: "4em",
    marginBottom: "5em",
    transition: "none",
    textTransform: "lowercase",
    "&:hover": {
      color: theme.palette.contrastText,
      border: `solid 1px ${theme.palette.contrastText}`,
    },
    borderRadius: 0,
    fontSize: "17px",
    fontWeight: "400",
    padding: "3px",
    letterSpacing: "2px",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
  AddCircle: {
    color: theme.palette.gray3,
    borderRadius: 0,
    margin: "auto",
    display: "flex",
    fontSize: "120px",
    paddingBottom: "15px",
    paddingTop: "15px",
    transition: "none",
    width: "100%",
    "&:hover": {
      //   color: theme.palette.contrastText,
      backgroundColor: `${theme.palette.contrastText}`,
      borderRadius: "4px",
    },
  },
  itemsGridAddCircle: {
    minWidth: "84px",
    minHeight: "84px",
    maxWidth: "150px",
    width: "100%",
    borderRadius: "10px",
    "&:hover": {
      // backgroundColor: theme.palette.contrastText,
      "& $TypographyAddCircle": {
        color: theme.palette.contrastText,
      },
      // "&:hover":{
      // boxShadow: `0px 0px 0px 2px ${theme.palette.contrastText}`
      // }
    },
  },
  TypographyAddCircle: {
    color: theme.palette.gray3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    // marginLeft: "1rem",
    // marginRight: "1rem",
    alignItems: "center",
    "&:hover": {
      color: theme.palette.contrastText,
    },
  },
  linkAddProfile: {
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  svgEditOverlay: {
    position: "relative",
    top: "-125px",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.contrastText,
  },
  svgIconEdit: {
    width: "35px",
    height: "35px",
  },
  buttonManageProfiles: {
    display: "block",
    margin: "1em 0 6.2em 0",
    fontSize: "1.2vw",
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
  itemsGridManageProfiles: {
    minWidth: "84px",
    minHeight: "84px",
    maxWidth: "150px",
    width: "100%",
    borderRadius: "4px",
    opacity: "0.6",
  },
  capitalize: {
    textTransform: "capitalize",
  },
}));

const dummyProfiles = [
  {
    _id: "629528a593fc5c50a6f475a5",
    name: "Hardco1",
    img: "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71",
  
  },
  {
    _id: "629528be93fc5c50a6f475ae",
    name: "Hardco2",
    img: "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcmNAN9bHNZNT9Fm3f-YF1y3Bgj-x3Z9dWYar46_6wAOcR4q5NZS3MUf7SQjkqtVdyWz2DX6SfBHiNourzUjMbGTdDEW.png?r=abe",
  },
  {
    _id: "62951bbdd879df1673cc58b3",
    name: "Hardco3",
    img: "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ2KWouF1OCDAtpdNIETPtEAVAywuZcnNb2gJhGfIzhaju9kWWAguLvUkNg_1Y57iTUFVn9_6a9ZmNrdxCHxxzM8yRqX.png?r=c08",
  },
  {
    _id: "4",
    name: "Hardco4",
    img: "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUngvSNL3ED6g9NsWhW9_FdDDzKC1gZCmLxi7mim9httnXRVYSxNJHJpbvblu0K_S94YoyPlkA2dja-zfL17UYw6WHkC.png?r=d26",
  },
];

const UserProfiles = () => {

  const {BASE_URL} = useContext(ApiCallsContext);
  const {currentProfile, setCurrentProfile} = useContext(UserDataContext);
  const location = useLocation();
  const classes = useStyles();
  const [profiles, setProfiles] = useState([]);

    useEffect(async() => {
      const url = BASE_URL + "/profiles"
      const res = await get(url)
      setProfiles(res.data.userProfiles) //res.data.userProfiles dummyProfiles
    }, []); 

    useEffect(() => {
      setCurrentProfile(profiles[0]) // TODO: pasar a handleClick correspondiente
    }, [profiles])

    // console.log(profiles) // Hasta acá llegan los valores
    // console.log("current:", currentProfile)

  // Si el arreglo de perfiles se encuentra vacio, mostrar mensaje
  if (profiles.length === 0)
    return (
      <>
        <Container
          maxWidth="sm"
          style={{
            marginTop: "200px",
            AlignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">
            No hay perfiles, por favor agregue uno nuevo.
          </Typography>
        </Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box className={classes.itemsGridAddCircle}>
            <Link to="/add-profile" className={classes.linkAddProfile}>
              <AddCircleIcon className={classes.AddCircle} />
              <Typography variant="h6" className={classes.TypographyAddCircle}>
                Agregar perfil
              </Typography>
            </Link>
          </Box>
        </Container>
      </>
    );

    // const handleClickProfile = (e) => {
    //   console.log(e.target)
    // }


  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Box className={classes.root}>
        <Container maxWidth="md" className={classes.container}>
          {location.pathname === "/profiles" ? (
            <Typography variant="h3"> ¿Quién está viendo ahora?</Typography>
          ) : (
            <Typography variant="h3">Administrar perfiles:</Typography>
          )}
        </Container>

        <Container maxWidth="md" className={classes.itemsAvatar}>
          {profiles.map((avatarProfiles) => {
            const { _id , name, img } = avatarProfiles;
            return (
              <Box key={_id} className={classes.itemsProfiles}>
               {/* <div key={_id} className={classes.itemsProfiles} onClick={handleClickProfile}> */}
              <Link to= "/browse">
                  {location.pathname === "/profiles" ? (
                    <img
                      className={classes.itemsGrid}
                      src={img}
                      alt={img}
                    />
                  ) : (
                    <Link to={`/manage-profiles/${_id}`}>
                      <img
                        className={classes.itemsGridManageProfiles}
                        src={img}
                        alt={img}
                      />
                    </Link>
                  )}
                </Link>

                <Typography variant="h6" className={classes.titleProfiles}>
                  {name}
                  {/* {handleChangeUserName} */}
                </Typography>

                {location.pathname === "/manage-profiles" && (
                  <Box className={classes.svgEditOverlay}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={classes.svgIconEdit}
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Box>
                )}
              </Box>
              // </div>
            );
          })}

          <Box className={classes.itemsGridAddCircle}>
            <Link to="/add-profile" className={classes.linkAddProfile}>
              {/* <a href={`/browse`}> */}
              <AddCircleIcon className={classes.AddCircle} />
              <Typography variant="h6" className={classes.TypographyAddCircle}>
                Agregar perfil
              </Typography>
              {/* </a> */}
            </Link>
          </Box>
        </Container>

        {location.pathname === "/manage-profiles" ? (
          <Button className={classes.buttonManageProfiles} href="/profiles">
            Listo
          </Button>
        ) : (
          <Button className={classes.buttonAdministrar} href="/manage-profiles">
            <span className={classes.capitalize}>A</span>dministrar perfiles
          </Button>
        )}
      </Box>
    </div>
  );
};

export default UserProfiles;
