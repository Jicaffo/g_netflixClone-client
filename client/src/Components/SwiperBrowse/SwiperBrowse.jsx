import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core"
//import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { SvgComponent } from "./SvgComponent/SvgComponent";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

 

const useStyles = makeStyles((theme) => ({
    root: {
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
        "& .MuiTypography-h6": {
            fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: "bold",
        }
    },
    swiper: {
        width: "100%",
        height: "100%",
        color: "red",
        "& .swiper-wrapper": {
            padding: "20px 0",
        },
        "& .swiper-button-next, .swiper-button-prev": {
            color: theme.palette.contrastText,
            transform: "scale(0.8)",
            "&:hover": {
                transform: "scale(1)",
            },
        },
        "& .swiper-slide": {
            transition: "250ms all",
            "&:hover": {
                transform: "scale(1.2)",
                zIndex: "1"
            },
            "&:first-child:hover": {
                margin: "0 30px",
            },
            "&:last-child:hover": {
                margin: "0 -30px",
            },
            "&:nth-child(6):hover": {
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
    swiperSlideImg: {
        display: "block",
        width: "100%",
        height: "auto",
        objectFit: "cover",
        borderRadius: "2px",
    },


}));

const SwiperBrowse = ({ list }) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h6">{list.listTitle}</Typography>
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
                {
                    list.mediaList.map((media) => {
                        return (
                            <SwiperSlide
                                key={media.mediaTitle}
                                className={classes.swiperSlide}
                            >
                                <div>
                                    <img className={classes.swiperSlideImg} src={media.imgUrl} alt={media.mediaTitle} />
                                    {/* <div className="svg"> */}
                                    {/* <SvgComponent/> */}
                                    {/* </div> */}
                                </div>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    );
}

export default SwiperBrowse

