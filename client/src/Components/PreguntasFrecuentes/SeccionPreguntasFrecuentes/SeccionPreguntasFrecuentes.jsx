import React from 'react'
import DropdownPreguntasFrecuentes from '../DropdownPreguntasFrecuentes/DropdownPreguntasFrecuentes'
import MailLogin from "../../MailLogin/MailLogin"
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    root: {
        borderBottom: "8px solid #222",
    },
    container: {
        margin: "70px auto",
        maxWidth: "815px",
        padding:"0",
    },
    title: {
        textAlign: "center",
        marginBottom: "1em",
        fontWeight: "bold",
    }
}))

const SeccionPreguntasFrecuentes = () => {

    const classes = useStyles() 
    return (
        <Box className={classes.root}>
            <Container maxWidth="md" className={classes.container}>
                <Typography
                variant="h3"
                component="h2"
                className={classes.title}
                >
                Preguntas Frecuentes
                </Typography>
                <DropdownPreguntasFrecuentes/>
                <MailLogin/>
            </Container>
        </Box>
        
    )
}

export default SeccionPreguntasFrecuentes