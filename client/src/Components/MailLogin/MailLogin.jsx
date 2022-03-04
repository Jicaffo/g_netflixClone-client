import React from 'react';
//import { useStyles } from './MailLogin.styles'; //Utilizandolo desde esta forma, desde un archivo separado, por algún motivo no funciona.
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";


const useStyles = makeStyles((theme) => {
	console.log('MLstyles', theme);

	return {
		root: {
			paddingTop: '0.85rem',
            textAlign: 'center'
		},
		text: {
			color: theme.palette.contrastText,
			fontSize: 'large',
			margin: '15px'
		},
		input: {
			backgroundColor: theme.palette.background.input,
			width: '450px',
			borderRadius: '2px',
			padding: '0px',
			height: '60px',
			boxSizing: 'border-box',
			paddingLeft: '10px'
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
	};
});

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