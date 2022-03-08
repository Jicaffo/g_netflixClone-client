import React from 'react';
//import { useStyles } from './Welcome.styles'; //Utilizandolo desde esta forma, desde un archivo separado, por algún motivo no funciona.
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MailLogin } from '..';

const useStyles = makeStyles( (theme) => ({
  root: {
      textAlign: "center",
      backgroundImage: `linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,.5) 60%,rgba(0,0,0,.8) 100%),url("https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/eb8a906e-1703-437f-9c3c-a82398f000ba/AR-es-20220214-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
      backgroundSize: "cover",  
      color: theme.palette.contrastText,
      borderBottom: `8px solid ${theme.palette.sectionBorder}`,
      fontFamily: "'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
      paddingBlock: "200px"
  },
  container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
  },
  headings: {
      maxWidth: "800px",
  },
  title: {
      fontWeight: "bold"
  },
  subtitle: {
      margin: "10px"
  }
}));

const Welcome = () => {

    const classes = useStyles();

    return (
      <Box className={classes.root}>
          <Container className={classes.container} maxWidth="md">
            <Typography
              variant="h3"
              component="h1"
              className={`${classes.headings} ${classes.title}`}
            >
              Peliculas y series ilimitadas y mucho más.
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              className={`${classes.headings} ${classes.subtitle}`}
            >
              Disfruta donde quieras. Cancela cuando quieras.
            </Typography>
            <MailLogin />
          </Container>
      </Box>
  )
}

export default Welcome