import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../Assets/Images/logo.svg';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent !important',
        position: 'absolute',
        boxShadow: 'none',
    },
    toolbar: {
        display: 'flex',
        paddingTop:' 0.5rem',
        height: 'auto',
        justifyContent: window.location.pathname === '/' && 'space-between !important'
    },
    iniciarSesion: {
        backgroundColor: '#e50914',
        lineHeight: '34px',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: '1rem !important',
        float: 'none',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        color: 'white',
        borderRadius: '3px',
        marginBottom: 'auto',
        marginTop: 'auto',
        display: 'block',
        width: '128px !important',
        height: '34px !important'
    },
    logo: {
        backgroundImage: `url(${Logo})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        // margin: 'auto',
        display: 'flex',
        width: '8.375rem',
        height: '2.25rem',
        border: 'none'
    },
    rightContent: {
        display: "flex",
        gap: "2rem"
    },
    listItems: {
        display: 'flex',
    },
    dropDown: {
        display: 'none',
        "&::after": {
            content: '',
            width: '0',
            height: '0',
            borderStyle: 'solid',
            borderWidth: '5px 5px 0 5px',
            borderColor: '#fff transparent transparent transparent',
            marginLeft: '5px',
        },
        ['@media (max-width: 980px)']: { // eslint-disable-line no-useless-computed-key
            display: 'flex'
        }
    },
    
}))



export { useStyles };