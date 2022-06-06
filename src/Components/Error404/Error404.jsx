import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Box, Container, Typography,Button } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import ApiCallsContext from '../../Contexts/ApiCallsContext'


const useStyles = makeStyles( (theme) => ({
  root: {
      color: theme.palette.gray3,
      padding: "70px 45px",
      "& a":{
          color: theme.palette.gray3,
          textDecoration: "none",
      },
      "& a:hover":{
          textDecoration: "underline",
      }     
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:`linear-gradient(
                    to top,
                    rgba(0,0,0,.8) 0,
                    rgba(0,0,0,0) 5%,
                    rgba(0,0,0,0) 85%,
                    rgba(0,0,0,.5) 90%,
                    rgba(0,0,0,8) 100%),
                    url("https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png")`,
    textAlign: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    position: "absolute",
  },
  box: {
    width: "700px"
  },
  title: {
    fontWeight: "bold",
    marginBottom: "15px"
  },
  button: {
    background: theme.palette.background.primaryButton.main,
    color: theme.palette.background.main,
    textTransform: "lowercase",
    fontWeight: "bold",
    margin: "20px 0px 20px 0px",
    fontSize:"18px",
    padding: "7px 20px 7px 20px"

  },
  errorCode:{
    //border: "solid 3px red",
    margin: "0px",
    padding: "0px"
  }
}));



const Error404 = () => {

  const history = useHistory();

  const handleClick = () => {
    history.push("/")
  }

  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Box className={classes.box}>
        <Typography variant="h2" className={classes.title}>¿Te perdiste?</Typography>
        <Typography variant="h5">No encontramos esa página. Encontrarás muchos títulos para explorar en la página de inicio.</Typography>
        <Button variant="contained" className={classes.button} onClick={handleClick}>
        Inicio de Netflix
        </Button>
        <Typography variant="h4" className={classes.errorCode}>Código de error <strong>NSES-404</strong></Typography>
      </Box>
    </Container>
  )
}

export default Error404