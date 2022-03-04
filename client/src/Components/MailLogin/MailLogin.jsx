import React from 'react';
import { useStyles } from './MailLogin.styles';
import { Typography, TextField, Button } from "@material-ui/core";
import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";

const MailLogin = () => {

    const validations = yup.object({
        mail: yup
          .string("No registramos un mail válido")
          .email("Debe ingresar un mail válido")
          .required("Es necesario completar este campo")
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
            <form action="#" onSubmit={formik.handleSubmit} className={classes.root}>

                <Typography
                    className={classes.text}>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
                </Typography>

                <TextField
                    variant="standard"
                    label="Email"
                    name="mail"
                    value={formik.values.mail}
                    onChange={formik.handleChange}
                    helperText={formik.errors.mail}
                    error={formik.errors.mail}
                    className={classes.input}
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ color: "secondary" }}
                />

                <Button
                    className={classes.button}
                    variant="contained"
                    disableElevation
                    onClick={formik.handleSubmit}
                >
                    Comenzar &gt;
                </Button>
            
            </form>
        </FormikProvider>
    )
}

export default MailLogin