import React from 'react';
import { useStyles } from './Welcome.styles';
import { Box, Container, Typography } from "@material-ui/core";
import { MailLogin } from '..';
import "../../Styles/Welcome.css"

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