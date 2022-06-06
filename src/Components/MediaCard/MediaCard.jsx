import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from "@material-ui/core"

const useStyles = makeStyles( (theme) => ({
  box: {
    padding: "0",
    margin: "0",
    alignItems: "baseline",
    justifyContent: "center",
    display: "flex",
    position: "relative",
    justifyContent: "flex-end"
  },
  swiperSlideImg:{
    width: "100%",
    borderRadius: "2px",
    //display: "block",
    //objectFit: "cover",
  },
  button: {
    color: theme.palette.main,
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "0",
    margin: "0",
    borderRadius: "40px",
    background: theme.palette.background.input2,
    color: theme.palette.background.primaryButton.main,
    border: `solid 1px ${theme.palette.gray1}`,
    fontSize: "1.1rem",
    aspectRatio: "1/1",
    height: "15%",
    minHeight: "15%",
    minWidth: "0px",
    "&:hover": {
      border: `solid 1px ${theme.palette.background.primaryButton.main}`,
      background: theme.palette.background.input2,
    }
  },
}));

const handleClick = (media) => {
  //console.log(media);
  const trailerUrl = "https://www.youtube.com/watch_popup?v="+ media.trailer + "&autoplay=1"
  window.open(trailerUrl) // Abre la url en una nueva pestaña
}

const MediaCard = ({media}) => {
  
  const classes = useStyles();
  const history = useHistory();
  const [displayNone, setDisplayNone] = useState("none")

  const handleMouseOn = () => {
    setDisplayNone("flex")
  }

  const handleMouseOut = () => {
    setDisplayNone("none")
  }

  return (
    <Box 
    className={classes.box} 
    onMouseOver={() => handleMouseOn()}
    onMouseOut={() => handleMouseOut()}>
      <img
        className={classes.swiperSlideImg}
        src={media.img}
        alt={media.title}
        id={media._id}
        onClick={ () => handleClick(media) }
        
        // style={{border: "2px solid green", padding: "5px"}}
      />
      <Button className={classes.button} variant="contained" style={{display: `${displayNone}`}}>
        +
      </Button>
    </Box>
  )
}

export default MediaCard