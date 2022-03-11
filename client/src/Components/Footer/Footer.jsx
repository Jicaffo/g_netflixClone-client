import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Box, Container, Typography } from '@material-ui/core';
import { LanguageSelector } from '..';
import { Link, useLocation } from 'react-router-dom';

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
    linksNav:{
        paddingTop: "1rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        
        
    },
    languageSelector:{
        margin: "30px 0px",
        display: "block",
    }
}));

const Footer = () => {

    const classes = useStyles();
    const location = useLocation();

    return (
        location.pathname === "/" &&
        
            <Container maxWidth="md" className={classes.root}>
                <Typography>¿Preguntas? Llama al <a href="#">0-800-666-2803</a> </Typography>
                <Box className={classes.linksNav}>
                    <Typography variant="body2"> <a href="#">Preguntas frecuentes</a> </Typography>
                    <Typography variant="body2"> <a href="#">Centro de ayuda</a> </Typography>
                    <Typography variant="body2"> <a href="#">Cuenta</a> </Typography>
                    <Typography variant="body2"> <a href="#">Prensa</a> </Typography>
                    <Typography variant="body2"> <a href="#">Relaciones con inversionistas</a> </Typography>
                    <Typography variant="body2"> <a href="#">Empleo</a> </Typography>
                    <Typography variant="body2"> <a href="#">Formas de ver</a> </Typography>
                    <Typography variant="body2"> <a href="#">Términos de uso</a> </Typography>
                    <Typography variant="body2"> <a href="#">Privacidad</a> </Typography>
                    <Typography variant="body2"> <a href="#">Preferencias de cookies</a> </Typography>
                    <Typography variant="body2"> <a href="#">Información corporativa</a> </Typography>
                    <Typography variant="body2"> <a href="#">Contáctanos</a> </Typography>
                    <Typography variant="body2"> <a href="#">Prueba de velocidad</a> </Typography>
                    <Typography variant="body2"> <a href="#">Avisos legales</a> </Typography>
                    <Typography variant="body2"> <a href="#">Solo en Netflix</a> </Typography>
                </Box>
                <LanguageSelector className={classes.languageSelector}/>
                <Typography variant="body2"> <a href="#">Netflix Argentina</a> </Typography>
            </Container>
    )
}

export default Footer