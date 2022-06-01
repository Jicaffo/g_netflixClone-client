import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core"
import { Navigation, Pagination, Grid } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const useStyles = makeStyles( (theme) => ({
    root:{
        height: "100%",
        width: "100%",
        background: "none",
        color: theme.palette.contrastText,
        margin: 0,
        marginBottom: "2em",
        padding: 0,
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        fontWeight: "bolder",
        "& .MuiTypography-h6":{
          fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: "bold",
        }
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

const customPagination = {
  // NTH: Ver paginación custom EJ: https://codesandbox.io/s/5wchj3?file=/src/App.jsx
  clickable: true,

  // type: "bullets", // default
  // renderBullet: (index, className) => {
  //   return '<span style="color: white; font-size: xx-large" class="' + className + '">' + (index + 1) + '</span>';
  // },

  // type: "custom", // 100% custom, tanto parte visual como funcionalidad
  // renderCustom:	(swiperObject, currentPage, totalPages) => {
  //   //console.log("swiper: ", swiperObject)
  //   let paginator = "";
  //   for (let i = currentPage; i <= totalPages; i++){
  //     paginator += '<span style="color: white; background-color: red">+</span>';
  //   }

  //   return paginator;
  // },
}

const SwiperBrowse = ({ list, multipleRows }) => {
  
  const classes = useStyles();

  // TODO: Revisar multirow (grid.rows no está funcionando): https://swiperjs.com/demos#slides-grid
  return (
    <Box className={classes.root}>
      <Typography variant="h6">{list.name}</Typography>
      <Swiper
        modules={[Navigation, Pagination, Grid]}
        slidesPerView={6}
        spaceBetween={11}
        slidesPerGroup={6}
        speed={800}
        pagination={ multipleRows ? false : customPagination }
        loop={ multipleRows ? false : true }
        navigation={ multipleRows ? false : true }
        grid={ multipleRows ? { rows: 2, fill: "row" } : { rows: 1 } }
        className={classes.swiper}
      >
      {
        list.items.map( (media) => {
          return (
            <SwiperSlide
              key={media.title}
              className={classes.swiperSlide}
            >
              <img className={classes.swiperSlideImg} src={media.img} alt={media.title}/>
            </SwiperSlide>
          )
        })
      }      
      </Swiper>
    </Box>
  );
}

export default SwiperBrowse
