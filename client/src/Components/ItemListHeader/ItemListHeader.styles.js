import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    items: {
        userSelect: 'none',
        listStyle: 'none',
        marginLeft: '20px',

        ['@media (max-width: 980px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        }
    },
    link: {
        textDecoration: 'none',
        lineHeight: '1.2',
        color: '#d0d0d0',
        transition: 'color 0.5s',

        "&.active": {
            color: 'white !important',
            fontWeight: '700',
            cursor: 'default'
        },
        "&:hover": {
            color: '#b3b3b3',
            transition: 'color 0.5s',
        },
    },
}))



export { useStyles };