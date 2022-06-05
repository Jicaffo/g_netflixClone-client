import React from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core"

const useStyles = makeStyles( (theme) => ({
  swiperSlideImg:{
    width: "100%",
    borderRadius: "2px",
    //display: "block",
    //objectFit: "cover",
  },
}));

const handleClick = (media) => {
  //console.log(media);
  const trailerUrl = "https://www.youtube.com/watch?v="+ media.trailer
  window.open(trailerUrl) // Abre la url en una nueva pestaña
}

const MediaCard = ({media}) => {

  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <img
        className={classes.swiperSlideImg}
        src={media.img}
        alt={media.title}
        id={media._id}
        onClick={ () => handleClick(media) }
        // style={{border: "2px solid green", padding: "5px"}}
      />
    </>
  )
}

export default MediaCard