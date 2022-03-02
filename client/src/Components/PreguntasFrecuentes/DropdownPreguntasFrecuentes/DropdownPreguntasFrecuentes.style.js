
import { makeStyles } from '@material-ui/core/styles';

const colors = {
    darkgrey: "#303030",
    white: "white",
    black: "black",
    red: "red"
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: colors.darkgrey,
    color: colors.white,
    
  },
  divider: {
    background: "black !important",
    height: '1.5px !important'
  },
  container: {
    marginBottom: '4px'
  },
  align:{
      display: 'flex',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    color: colors.white,
    
  },
  expandOpen: {
    transform: 'rotate(45deg)',
    color: colors.white
  },
}));

export {useStyles}