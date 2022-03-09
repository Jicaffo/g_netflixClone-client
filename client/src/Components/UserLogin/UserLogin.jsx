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
import {
    useFormik,
    //ErrorMessage, // Según https://formik.org/docs/api/useFormik, ErrorMessage no funciona con useFormik
    FormikProvider } from "formik";
import * as yup from "yup";

//TODO!: (funcional) Mejorar user input incluyendo la opción de teléfono como opcional en la validación.

//TOFIX: (funcional) Hacer que cada campo maneje la validación en forma independiente, que no se valide todo al producirse un onChange en cualquiera de ellos. Intenté usear un condicional con formik.touched, pero el objeto aparece vacío aún si el campo fue clickeado con el mouse.
//TOFIX: (estético) Quitar el color azul/rojo del subrayado del link facebook al pasar el mouse por arriba y hacer click.

const useStyles = makeStyles( (theme) => ({
    root: {
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
        },
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
        marginBottom: "16px",
        "& .MuiFormLabel-root": {
            color: theme.palette.gray2,
        },
        "& .MuiInputBase-root":{
            color: theme.palette.contrastText,
            background: theme.palette.background.input2,
            borderRadius: "4px",
        },
        "& .MuiFormHelperText-root.Mui-error": {
            color: theme.palette.errorText2,
            marginLeft: "3px"
        },
        "& .Mui-error .MuiInputBase-input": {
            borderBottom: `2px solid ${theme.palette.errorText2}`,
            borderRadius: "4px",
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
        "& :hover":{
            //No funciona, queda sobreescrito por "root & a:hover"
            textDecoration: `underline ${theme.palette.gray3}`
        }
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
    
    const validations = yup.object({
        user: yup
            .string("Debe ingresar un mail o teléfono.") 
            .email("Debe ingresar un mail válido")
            .required("Ingresa un email o un número de teléfono válido."),
        pass: yup
            .string("La contraseña debe tener entre 4 y 60 caracteres.")
            .min(4, "La contraseña debe tener entre 4 y 60 caracteres.")
            .max(60, "La contraseña debe tener entre 4 y 60 caracteres.")
            .required("La contraseña debe tener entre 4 y 60 caracteres."),
    });
    
    const formik = useFormik({
        initialValues: {
            user: "",
            pass: "",
        },
        validationSchema: validations,
        onSubmit: (values) => console.log("Formulario enviado: ", values)
    });

    const handleChangeRemember = () => {
        setRemember(!remember);
    };

    return (
        <Box className={classes.root}>
            <Container maxWidth="md">
                <Paper className={classes.paper}>
                    <FormikProvider value={formik}>
                        <form onSubmit={formik.handleSubmit}>
                            <Typography variant="h4" className={classes.title}>Inicia sesión</Typography>
                            <Box className={classes.columnContent}>
                                <TextField
                                    className={classes.input}
                                    variant="filled"
                                    label="Email o número de teléfono"
                                    name="user"
                                    value={formik.values.user}
                                    onChange={formik.handleChange}
                                    //Funciona si pongo un string o "formik.errors.user" pero no usando "<ErrorMessage name="user" className="formError"/>"
                                    // Según https://formik.org/docs/api/useFormik, ErrorMessage no funciona con useFormik
                                    helperText={formik.errors.user ? formik.errors.user : "" }
                                    //debería poder agregar formik.touched.user para que cada campo se valide sólo en caso de haber sido clickeado,
                                    //pero el objeto no se actualiza al clickear un campo como debería (idem componente siguiente).
                                    error={formik.errors.user}
                                    InputProps={{ disableUnderline: true }}
                                />
                                <TextField
                                    className={classes.input}
                                    variant="filled"
                                    type="password"
                                    label="Contraseña"
                                    name="pass"
                                    value={formik.values.pass}
                                    onChange={formik.handleChange}
                                    helperText={formik.errors.pass ? formik.errors.pass : "" }
                                    error={formik.errors.pass}
                                    InputProps={{ disableUnderline: true }}
                                />
                                <Button 
                                    className={classes.button}
                                    disableElevation
                                    onClick={formik.handleSubmit}
                                    type="submit"
                                >
                                    Iniciar Sesion
                                </Button>
                                <Box className={`${classes.rowContent} ${classes.stretch}`}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={remember}
                                                onChange={handleChangeRemember}
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
                        </form>
                    </FormikProvider>
                </Paper>
            </Container>
        </Box>            
    )
}

export default UserLogin