import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    li: {
        cursor: 'default',
        lineHeight: '24px',
        display: 'block',
    },
    a: {
        width: '260px',
        height: '50px',
        display: 'flex',
       '-webkit-box-align': 'center',
       ' -webkit-align-items':' center',
        '-moz-box-align': 'center',
        '-ms-flex-align': 'center',
        'align-items': 'center',
        '-webkit-box-pack': 'center',
        '-webkit-justify-content': 'center',
        '-moz-box-pack': 'center',
        '-ms-flex-pack': 'center',
        'justify-content': 'center',
        position: 'relative',
        color: '#b3b3b3',
        '-webkit-transition': 'background-color .4s',
        '-o-transition': 'background-color .4s',
        '-moz-transition': 'background-color .4s',
        transition: 'background-color .4s',
        textDecoration: 'none',
       

        "&.active": {
            color: '#fff',
            fontWeight: '700',
            cursor: 'default',
        }
    },
}))



export { useStyles };