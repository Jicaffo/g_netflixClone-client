import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Container} from "@material-ui/core"
import { Pagination } from "swiper";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* import "./styles.css"; */


const useStyles = makeStyles( (theme) => ({
    root:{
        marginTop: "10em",
        height: "100%",
        width: "100%",
        position: "relative",
        background: "none",
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: "14px",
        color: "#000",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center"
    },
    swiper: {
        width: "100%",
        height: "100%",
        color: "red",
        "& .swiper-wrapper":{
          padding: "20px 0",
        },
        "& .swiper-button-next, .swiper-button-prev":{
          color: theme.palette.contrastText,
          transform: "scale(0.8)",
          "&:hover":{
            transform: "scale(1)",
          },
        },
        "& .swiper-slide":{
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
          }
        }
        
    },
    swiperSlide: {
        textAlign: "center",
        fontSize: "18px",
        background: "#141414",
        transition: "250ms all",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",

        /* Center slide text vertically
        display: "-webkit-box",
        display: "-ms-flexbox",
        display: "-webkit-flex", 
        WebkitBoxPack: "center",
        msFlex: "center",
        WebkitJustifyContent: "center", 
        WebkitBoxAlign: "center",
        WebkitAlignItems: "center", */
        
    },
    swiperSlideImg:{
        display: "block",
        width: "100%",
        height: "auto",
        objectFit: "cover",
        borderRadius: "2px",
    },
    
    
}));

const movies = [
  {
    "title":"Emily in Paris",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd4okK-9R6vjvoPkB6Msrd44BUNHa5WZhyZDXeldFOXHinLPDExremWPt334t8zg1SAezDERP4OwERhB5tLEjVB20Wb3g71OJ7OfH-doY16O4zPqfboghX_DaV9h.jpg?r=cd9"
  },
  {
    "title":"Fin de semana en Croacia",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABezpQUda_XVtPmmtYQEGK-iR9B3zss0Zsay1wOkR9pBT5ipxtM86IonFuT6tjGbIm3tSh1KP_SsgP1gRaKKjFgOVlciFekWfIusKjSTzxcCcZeiF4nahcingdnm6.jpg?r=4d3"
  },
  {
    "title":"Estamos muertos",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeoK2tWCAEVCngkmcH6kC6HZ38st4knkVprMpHqknYoHeQxoVos44chJXxvwoe4LEsvkSxUhXATsZ4YNCtEwSUuoXtVxS_BKF5ZqdCVqwKL_2qJEsVax2Sz4iwFk.jpg?r=f88"
  },
  {
    "title":"Ouija",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc9iltqEjIxEL-ACvhEjhdLDXOOEHbgs0z716BT7ToP0xcxS9S61LwNqkrpz60bBWwDf5bApxxWrlbRDOIBUcd8jAoc.webp?r=37b"
  },
  {
    "title":"The Crown",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWB_KjvPQ6PqGsdyJN55lnNBB_RR2HfB1WaiWDqV0SYoBLojWnYuQKm59gdJQ5qnvvIADXTADlFV5N8tIxZpocOPBKUJUbqVXBaHLrANxAm-NaUmQqLbWHtIiClN.jpg?r=dcd"
  },
  {
    "title":"Orgullo y prejuicio",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZuJsqGP9XtQLU2SVpU0IngGiXaBV8hz33OPuZE226OwtRiV_eMAwMrgfWUrWuQor-TEqizG0knaVmrioOfZr0Xdx-c.webp?r=314"
  },
  {
    "title":"Outlander",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfxoE8peGqSCmmldIAPxVlfJ6Vb_nBqPoKP03Zsv15OCtGE8KnhtXNdki8aGYrJ7T5CpIBq2t9k3eHgniBsi8qLagPM.webp?r=c5f"
  },
  {
    "title":"El rey",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcfzQ5w12eeSxKXL4wb5NA5OsUUEbAP9yoD6iMyBZyU5N4X9v5N5PsFC7tgFrL4H8Y092maH4BaDz3ZQDCub5R69twJ89ZVKJgulatAiCgQGBeqZLuPIEMMJ47eF.jpg?r=63e"
  },
  {
    "title":"Versalles",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfe59Ij8cEeFdo1awW7lUSO1D8TZuHrAb7SlzAIpic6gfgmdiypSQyL9ByUU1210i0stcJ_bLQUcWhBfX1RR57s5F4k.webp?r=991"
  },
  {
    "title":"Vikingos",
    "img":"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVBgaj6Nj7-1SnWCXvNMSZItnzVfNKGT_seNrcQIaABgxgyo4RGbvLgocOcqxeD1qtiM23QWj5I4U002vL8BF3hcgAk.webp?r=e15"
  },
]

const SwiperBrowse = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Swiper
        slidesPerView={6}
        spaceBetween={11}
        slidesPerGroup={5}
        speed={800}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        navigation={true} 
        className={classes.swiper}
      >
        {movies.map(dataMovies => {
          const {title, img} = dataMovies
          return (
          <SwiperSlide key={title} className={classes.swiperSlide}><img className={classes.swiperSlideImg} src={dataMovies.img} alt={dataMovies.title}/></SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  );
}

export default SwiperBrowse
