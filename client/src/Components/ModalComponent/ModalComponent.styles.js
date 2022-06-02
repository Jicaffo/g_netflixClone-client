import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    responsiveMenu: {
        transitionDuration: '150ms',
        marginLeft: '111px',
        boxSizing:' border-box',
        top: '71px',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.9)',
        color: '#fff',
        fontSize: '13px',
        display: 'block',
        lineHeight: '21px',
        border: 'solid 1px rgba(255,255,255,.15)',
        cursor: 'default',
        ['@media (min-width: 900px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        }
    },
    arrow: {
        position: 'absolute',
        top: '-16px',
        left: '50%',
        borderWidth: '7px',
        marginLeft: '-7px',
        borderColor: 'transparent transparent #e5e5e5',
        borderStyle: 'solid',
        height: '0',
        width: '0',
    },
    topbar: {
        position: 'absolute',
        top: '-2px',
        left: '0',
        right: '0',
        height: '2px',
        background: '#e5e5e5',
    },
    ul: {
        padding: '0',
        height: 'auto',
        cursor: 'default',
    },
    disabled: {
        pointerEvents: 'none',
        cursor: 'pointer',
    },
}))



export { useStyles };