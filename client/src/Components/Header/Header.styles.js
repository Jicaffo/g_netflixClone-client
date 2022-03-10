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
        justifyContent: 'space-between !important'
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

    
}))



export { useStyles };