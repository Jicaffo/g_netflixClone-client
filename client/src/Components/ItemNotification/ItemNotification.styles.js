import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    notification: {
        color: '#fff',
        lineHeight: '1',
        position: 'relative',
        borderBottom: '1px solid rgba(255,255,255,.25)',
        backgroundColor: 'rgba(0,0,0,0.15)',

        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.65)',
        }
    },
    imageTextNotification: {
        display: '-webkit-box',
        display: '-webkit-flex',
        display: '-moz-box',
        display: '-ms-flexbox',
        display: 'flex',
       ' -webkit-box-orient': 'horizontal',
        '-webkit-box-direction': 'normal',
        '-webkit-flex-direction': 'row',
        '-moz-box-orient': 'horizontal',
        '-moz-box-direction': 'normal',
        '-ms-flex-direction': 'row',
        flexDirection: 'row',
    },
    element: {
        position: 'relative',
        display: 'flex',
        flexGrow: '0',
        alignItems: 'left',
        textDecoration: 'none'
    },
    image: {
        display: 'block',
        padding: '16px'
    },
    text: {
        lineHeight: '1.2',
        color: '#ccc',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '264px',
        textAlign: 'left'
    },
    header: {
        textDecoration: 'none'
    },
    body: {
        textDecoration: 'none'
    },
    titleCard: {
        width: '112px',
        '-webkit-border-radius': '4px',
       ' -moz-border-radius': '4px',
        borderRadius: '4px',
    },
    age: {
        fontSize: '12px',
        lineHeight: '1.3',
        color: 'grey',
        marginTop: '3px',
    },
    span: {
        textDecoration: 'none'
    }

}))



export { useStyles };