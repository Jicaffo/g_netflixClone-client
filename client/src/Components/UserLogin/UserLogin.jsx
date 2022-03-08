import React, { useState } from 'react'
import {
    Box,
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    FormControlLabel,
    Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles( (theme) => ({
    root: {
        //textAlign: "center",
        backgroundImage: `linear-gradient(to top,rgba(0,0,0,.5) 0,rgba(0,0,0,.5) 100%), url("https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/77705737-33cd-4709-b772-d1e85d373135/AR-es-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
        backgroundSize: "cover",  
        color: theme.palette.contrastText, // Por algún motivo, no se aplica
        fontFamily: "'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
        paddingBlock: "100px",
        "& a":{
            textDecoration: "none",
        },
        "& a:hover":{
            textDecoration: "underline",
        }
    },
    paper: {
        backgroundColor: "rgba(0,0,0,.75)",
        padding: "60px",
        width: "330px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        color: theme.palette.gray3,
    },
    columnContent:{
        display: "flex",
        flexDirection: "column",
    },
    rowContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    stretch: {
        justifyContent: "space-between"
    },
    title: {
        fontWeight: "bolder",
        color: theme.palette.contrastText,
        marginBottom: "28px",
        textAlign: "left",
    },
    input: {
        background: theme.palette.background.input2,
        borderRadius: "4px",
        marginBottom: "16px",
        "& .MuiFormLabel-root": {
            color: theme.palette.gray2,
        },
        "& .MuiInputBase-root":{
            color: theme.palette.contrastText,
        }

    },
    button: {
        borderRadius: '2px',
        height: '48px',
        fontSize: 'large',
        textTransform: 'capitalize',
        color: theme.palette.contrastText,
        backgroundColor: theme.palette.primary.main,
        marginTop: "24px",
        marginBottom: "12px",
        transition: 'background-color 0s',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    },
    checkbox:{
        "& .MuiFormControlLabel-label": {
            color: theme.palette.gray1,
            fontSize: "small",
        },
        "& .MuiCheckbox-root": {
            color: theme.palette.contrastText,
            borderRadius: "0px",
            paddingBlock: "0px",
            paddingRight: "0px",
        }
    },
    needHelpLink:{
        color: theme.palette.gray1,
    },
    extra:{
        marginTop: "36px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },
    fbLogo:{
        width: "20px",
        height: "20px",
        marginRight: "10px",
    },
    fbLoginText:{
        color: theme.palette.gray3,
    },
    subscribeLink: {
        color: theme.palette.contrastText,
    },
    captchaText: {
        color: theme.palette.gray2,
        lineHeight: "1.3",
    },
    captchaInfoLink: {
        color: theme.palette.linkText,
        paddingBottom: "48px",
    },

}));

const UserLogin = () => {
    const classes = useStyles();

    const [remember, setRemember] = useState(false);
    
    const handleChange = (event) => {
        setRemember(!remember);
    };

    return (
        <Box className={classes.root}>
            <Container maxWidth="md">
                <Paper className={classes.paper}>
                    <Typography variant="h4" className={classes.title}>Inicia sesión</Typography>
                    <Box className={classes.columnContent}>
                        <TextField
                            variant="filled"
                            className={classes.input}
                            label="Email o número de teléfono"
                        />
                        <TextField
                            variant="filled"
                            className={classes.input}
                            label="Contraseña"
                        />
                        <Button className={classes.button}>Iniciar Sesion</Button>
                        <Box className={`${classes.rowContent} ${classes.stretch}`}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={remember}
                                        onChange={handleChange}
                                        name="remember"
                                        color="secondary"
                                        className={classes.checkbox2}
                                    />
                                }
                                label="Recuérdame"
                                className={classes.checkbox}
                            />
                            <Typography variant="caption">
                                <a href="#" className={classes.needHelpLink}>¿Necesitás Ayuda?</a>
                            </Typography>
                        </Box>
                        <Box className={classes.extra}>
                            <a href="#" className={classes.rowContent}>
                                <img
                                    src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
                                    alt="Logo Facebook"
                                    className={classes.fbLogo}
                                />
                                <Typography variant="caption" className={classes.fbLoginText}>
                                    Iniciar sesión con Facebook
                                </Typography>
                            </a>
                            <Typography variant="body1">
                                ¿Primera vez en Netflix? <a href="#" className={classes.subscribeLink}>Suscríbete ahora</a>.
                            </Typography>
                            <Typography variant="caption" className={classes.captchaText}>
                                Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <a href="#" className={classes.captchaInfoLink}>Más info.</a>
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>            
    )
}

export default UserLogin