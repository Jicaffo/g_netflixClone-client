import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modalUsersActive: {
        transitionDuration: '150ms',
        marginLeft: '111px',
        boxSizing:' border-box',
        top: '71px',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.9)',
        color: '#fff',
        fontSize: '13px',
        opacity: '1',
        display: 'block',
        lineHeight: '21px',
        border: 'solid 1px rgba(255,255,255,.15)',
        right: '17px',
        cursor: 'default',
        pointerEvents: 'visible'
    },
    modalUsers: {
        transitionDuration: '150ms',
        marginLeft: '111px',
        boxSizing:' border-box',
        top: '71px',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.9)',
        color: '#fff',
        fontSize: '13px',
        opacity: '0',
        display: 'block',
        lineHeight: '21px',
        border: 'solid 1px rgba(255,255,255,.15)',
        right: '17px',
        cursor: 'default',
        pointerEvents: 'none'
    },
    arrow: {
        position: 'absolute',
        top: '-16px',
        right: '0',
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
        margin: '0',
    },
    subMenu: {
        cursor: 'default',
        lineHeight: '24px',
        display: 'block',
        fontSize: '16px'
    },
    ptrackContainer: {
        boxSizing: 'border-box',
        cursor: 'default',
        lineHeight: '24px',
        fontSize: '16px'
    },
    usersContainer: {
        display: 'block',
        maxHeight: '80vh',
        maxHeight: '-webkit-calc(100vh - 280px)',
        maxHeight: '-moz-calc(100vh - 280px)',
        maxHeight: 'calc(100vh - 280px)',
        minHeight: '100px',
        overflow: 'auto',
        padding: '0',
        listStyle: 'none',
        width: '408px',
    },
}))



export { useStyles };