import React, {useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSearchParams } from '../../Hooks'
import {
    Box,
    Container,
    Paper,
    Typography,
    TextField,
    Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
    useFormik,
    //ErrorMessage, // Según https://formik.org/docs/api/useFormik, ErrorMessage no funciona con useFormik
    FormikProvider } from "formik";
import * as yup from "yup";
import ApiCallsContext from '../../Contexts/ApiCallsContext'
import { post } from '../../Services/apiCalls'

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
    flexEnd: {
        justifyContent: "flex-end"
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
    needHelpLink:{
        color: theme.palette.gray1,
    },
    extra:{
        marginTop: "36px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },
    // fbLogo:{
    //     width: "20px",
    //     height: "20px",
    //     marginRight: "10px",
    // },
    // fbLoginText:{
    //     color: theme.palette.gray3,
    //     "& :hover":{
    //         //No funciona, queda sobreescrito por "root & a:hover"
    //         textDecoration: `underline ${theme.palette.gray3}`
    //     }
    // },
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

const validationSchema = yup.object({
    name: yup
            .string("Tienes que ingresar un nombre de usuario")
            .min(1, "El nombre de usuario debe tener entre 1 y 20 caracteres.")
            .max(20, "El nombre de usuario debe tener entre 1 y 20 caracteres.")
            .required("El nombre de usuario es un campo requerido."),
    email: yup
            .string("Debe ingresar su email.")
            .email("Debe ingresar un email válido")
            .required("Ingresa un email.")
            // .test('test-name', 'Ingresa un email o un número de teléfono válido.', // Agrega validación combinada mail / teléfono
            //     function(value) {
            //         /* eslint-disable no-useless-escape */
            //         const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            //         const phoneRegex = /^(\+54-|\+54|0)?\d{10}$/; // Change this regex based on requirement
            //         /* eslint-enable no-useless-escape */
            //         let isValidEmail = emailRegex.test(value);
            //         let isValidPhone = phoneRegex.test(value);
            //         if (!isValidEmail && !isValidPhone ){
            //         return false;
            //         }
            //         return true;
            //      })
            ,
    password: yup
            .string("La contraseña debe tener entre 4 y 60 caracteres.")
            .min(4, "La contraseña debe tener entre 4 y 60 caracteres.")
            .max(60, "La contraseña debe tener entre 4 y 60 caracteres.")
            .required("La contraseña debe tener entre 4 y 60 caracteres."),
});

const UserRegister = () => {
    const classes = useStyles();
    const apiData = useContext(ApiCallsContext);
    const history = useHistory();
    const searchParams = useSearchParams();

    const initialValues = {
        email: searchParams.get('email') || "",
        password: "",
        name: ""
    }

    const onSubmit = async (userData) => {
        const url = apiData.BASE_URL + "/auth/register"
        const res = await post(url, userData)

        if (res === undefined){
            history.push("/register") //?email=""
            alert("Error en la petición, registrese nuevamente.") // Debería ser un modal
        } else if (res.status >= 200 && res.status < 300) {
            localStorage.setItem("token", res.data.token)
            history.push("/profiles")
        }

        // Solo continúa de devolver un 2XX
        // console.log("onSubmit res", res) 
        // if (res.status >= 200 && res.status < 300){
            
        // } else if (res.status >= 400 && res.status < 500) {
        //     history.push("/register")
        //     alert("Error en la petición, registrese nuevamente.") // Debería ser un modal
        // } else {
        //     //throw new Error("Código de respuesta no reconocido")
        //     console.err("Error en la petición. Código de respuesta no reconocido.")
        // }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return (
        <Box className={classes.root}>
            <Container maxWidth="md">
                <Paper className={classes.paper}>
                    <FormikProvider value={formik}>
                        <form onSubmit={formik.handleSubmit}>
                            <Typography variant="h4" className={classes.title}>Registrarse</Typography>
                            <Box className={classes.columnContent}>
                                <TextField
                                    variant="filled"
                                    className={classes.input}
                                    InputProps={{ disableUnderline: true }}
                                    name="name"
                                    label="Nombre"
                                    value={formik.values.name || ""}
                                    onChange={formik.handleChange}
                                    // Necesitamos usar formik.handleBlur en el evento onBlur para poder utilizar el objeto formik.touched,
                                    // ya que el contenido este objeto se populan desde el método handleBlur. De lo contrario queda vacío.
                                    onBlur={formik.handleBlur}
                                    // Funciona usando un string o "formik.errors.user" pero no usando "<ErrorMessage name="user" className="formError"/>"
                                    // Según https://formik.org/docs/api/useFormik, ErrorMessage no funciona con useFormik
                                    helperText={ formik.touched.name && formik.errors.name }
                                    error={ formik.touched.name && Boolean(formik.errors.name) }
                                />
                                <TextField
                                    variant="filled"
                                    className={classes.input}
                                    InputProps={{ disableUnderline: true }}
                                    name="email"
                                    label="Email o número de teléfono"
                                    value={formik.values.email || ""}
                                    onChange={formik.handleChange}
                                    // Necesitamos usar formik.handleBlur en el evento onBlur para poder utilizar el objeto formik.touched,
                                    // ya que el contenido este objeto se populan desde el método handleBlur. De lo contrario queda vacío.
                                    onBlur={formik.handleBlur}
                                    // Funciona usando un string o "formik.errors.user" pero no usando "<ErrorMessage name="user" className="formError"/>"
                                    // Según https://formik.org/docs/api/useFormik, ErrorMessage no funciona con useFormik
                                    helperText={ formik.touched.email && formik.errors.email }
                                    error={ formik.touched.email && Boolean(formik.errors.email) }
                                />
                                <TextField
                                    variant="filled"
                                    className={classes.input}
                                    InputProps={{ disableUnderline: true }}
                                    type="password"
                                    name="password"
                                    label="Contraseña"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    helperText={ formik.touched.password && formik.errors.password }
                                    error={ formik.touched.password && Boolean(formik.errors.password) }
                                />
                                <Button 
                                    className={classes.button}
                                    disableElevation
                                    onClick={formik.handleSubmit}
                                    type="submit"
                                >
                                    Registrarse
                                </Button>
                                <Box className={`${classes.rowContent} ${classes.flexEnd}`}>
                                    <Typography variant="caption">
                                        <Link to="/register" className={classes.needHelpLink}>¿Necesitás Ayuda?</Link>
                                    </Typography>
                                </Box>
                                <Box className={classes.extra}>
                                    <Typography variant="body1">
                                        ¿Ya tienes una cuenta? <Link to={`/login?email=${formik.values.email}`} className={classes.subscribeLink}>Logueate ahora</Link>.
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

export default UserRegister