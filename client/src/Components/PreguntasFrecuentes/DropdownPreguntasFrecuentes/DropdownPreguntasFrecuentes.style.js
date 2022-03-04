
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '4px'
    
  },
  divider: {
    background: "black !important",
    height: '1.5px !important'
  },
  accordion: {
    background: theme.palette.background.card,
    color: theme.palette.background.input,
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