import React from 'react';
//import { useStyles } from './MailLogin.styles'; //Utilizandolo desde esta forma, desde un archivo separado, por algún motivo no funciona.
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik, FormikProvider, ErrorMessage } from "formik";
import * as yup from "yup";


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '0.85rem',
        textAlign: 'center'
    },
    text: {
        color: theme.palette.contrastText,
        fontSize: 'large',
        margin: '15px auto'
    },
    input: {
        backgroundColor: theme.palette.background.input,
        width: '450px',
        borderRadius: '2px',
        padding: '0px',
        height: '60px',
        boxSizing: 'border-box',
        paddingLeft: '10px',
        //borderBottom: `2px solid ${theme.palette.errorText}`, //Debería poder aplicarse solo de tener un hijo con clase "Mui-error".        
        "& .MuiFormLabel-root": {
            color: theme.palette.secondary.main,
            fontWeight: "bold",
            marginLeft: "10px",
        },
        "& .MuiFormLabel-root[data-shrink='false']": {
            fontWeight: "normal",
        },
        "& .MuiFormHelperText-root": {
            marginTop: "20px",
            fontSize: "14px",
        },
        "& .MuiFormHelperText-root.Mui-error": {
            color: theme.palette.errorText,
        },

    },
    button: {
        borderRadius: '2px',
        height: '60px',
        width: '200px',
        marginLeft: '1px',
        fontSize: 'x-large',
        textTransform: 'capitalize',
        color: theme.palette.contrastText,
        backgroundColor: theme.palette.primary.main,
        transition: 'background-color 0s',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }
}));

const MailLogin = () => {

    const validations = yup.object({
        mail: yup
            .string("Escribe una dirección de email válida.")
            .email("Escribe una dirección de email válida.")
            .required("El email es obligatorio.")
    });

    const formik = useFormik({
        initialValues: {
            mail: ""
        },
        validationSchema: validations,
        onSubmit: (values) => console.log("Formulario enviado: ", values)
    });

    const classes = useStyles();

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className={classes.root}>

                <Typography
                    className={classes.text}>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
                </Typography>

                {/* <ErrorMessage name="mail" /> */}
                <Grid item mt={3}>

                    <TextField
                        variant="standard"
                        label="Email"
                        name="mail"
                        value={formik.values.mail}
                        onChange={formik.handleChange}
                        helperText={formik.errors.mail ? <ErrorMessage name="mail" /> : ""}
                        error={formik.errors.mail}
                        className={classes.input}
                        InputProps={{ disableUnderline: true }}
                        InputLabelProps={{ color: "secondary" }}
                    // // También funciona, pasa un objeto con las props a pasar al componente InputLabel
                    // // En este caso contiene una sola prop "style", cuyo valor es el objeto que contiene los estilos.
                    // FormHelperTextProps={{   
                    //     style: {
                    //         marginTop: "20px",
                    //         fontSize: "14px",
                    //     } }}
                    />
                <Button
                    className={classes.button}
                    variant="contained"
                    disableElevation
                    onClick={formik.handleSubmit}
                    type="submit"
                >
                    Comenzar &gt;
                </Button>
                </Grid>

            </form>
        </FormikProvider>
    )
}

export default MailLogin