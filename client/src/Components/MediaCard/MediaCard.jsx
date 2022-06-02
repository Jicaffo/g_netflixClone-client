import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from '@material-ui/core/styles';

import { Box, Typography } from "@material-ui/core"
import { Navigation, Pagination, Grid } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const useStyles = makeStyles( (theme) => ({
    swiperSlide: {
        textAlign: "center",
        fontSize: "18px",
        background: "#141414",
        transition: "250ms all",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        transition: "250ms all",
        "&:hover":{
          transform: "scale(1.2)",
          zIndex:"1"
        },
        "&:first-child:hover":{
          margin: "0 30px",
        },
        "&:last-child:hover":{
          margin: "0 -30px",
        },
        "&:nth-child(6):hover":{
          margin: "0 -30px",
        },
    },
    swiperSlideImg:{
        display: "block",
        width: "100%",
        height: "auto",
        objectFit: "cover",
        borderRadius: "2px",
    },
    
    
}));

const MediaCard = ({media}) => {

    const classes = useStyles();

  return (
    <SwiperSlide
    key={media.title}
    className={classes.swiperSlide}
  >
    <img className={classes.swiperSlideImg} src={media.img} alt={media.title}/>
  </SwiperSlide>
  )
}

export default MediaCard