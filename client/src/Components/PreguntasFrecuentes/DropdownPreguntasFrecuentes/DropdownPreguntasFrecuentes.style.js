import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '30px auto'
  },
  divider: {
    background: "black !important",
    height: '1.5px !important'
  },
  accordion: {
    background: theme.palette.background.card,
    color: theme.palette.background.input,
    padding: ".5em 0",
    marginBottom: "8px",
  },
  icon: {
    color: theme.palette.background.input,
    fontSize: "30px",
    transform: 'rotate(45deg)'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
}));

export {useStyles}