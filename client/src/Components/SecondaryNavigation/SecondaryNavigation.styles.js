import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    secondaryNavigation: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: '1',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '2%',
        top: '0',
        height: '100%'
    },
    searchBox: {
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    navElement: {
        marginRight: '15px',
        width: 'fit-content',
        height: 'fit-content',
        
        '&:hover': {
            cursor: 'pointer'
        }
    },
    navElementSearchBox: {
        marginRight: '15px',
        width: 'fit-content',
        height: 'fit-content',
    },

    profileAvatar: {
        width: '52px',
        height: '32px',
        alignItems: 'center',
        display: 'flex'
    },
    imageAvatar: {
        width: '32px',
        height: '32px',
        borderRadius: '5px',
    },
    faSearch: {
        cursor: 'pointer',
        fontSize: '20px',
    },
    iconDrop: {
        transition: 'ease 0.3s',
        fontSize: '20px',
    },
    rotate: {
        transform: 'rotate(180deg)',
        transition: 'ease 0.3s',    
        cursor: 'pointer'
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
        listStyle: 'none'
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
}))



export { useStyles };