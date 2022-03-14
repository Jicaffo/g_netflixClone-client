import React from 'react';
import { Box, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const useStyles = makeStyles( (theme) => ({
    root:{
        paddingTop: "80px",
        backgroundSize: "cover",  
        height: "56.23vw", //Ratio calculado de las dimensiones de la imagen para que se vea el alto completo (alto = 56.23% del ancho)
        color: theme.palette.contrastText,
        fontFamily: "'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
    },
    highlightedMedia:{
        width: "40vw",
        marginTop: "24px",
        "& img":{
            width:"100%",
        },
    },
    title:{
        marginBottom: "20px",
        fontSize: "1.5vw",
        "&:first-of-type":{
            marginTop: "20px",
            fontWeight: "bold",
        }
    },
    button:{
        fontWeight: "bold",
        paddingInline: "1.2rem",
        backgroundColor: theme.palette.background.primaryButton.main,
        textTransform: "capitalize",
        fontSize: "1.2vw",
        width: "12vw",
        transition: "none",
        "&:hover":{
            backgroundColor: theme.palette.background.primaryButton.hover,
        },
        "&:nth-of-type(2)":{
            width: "18vw",
            backgroundColor: theme.palette.background.secondaryButton.main,
            color: theme.palette.contrastText,
            marginLeft: "0.8vw",
        },
        "&:nth-of-type(2):hover":{
            backgroundColor: theme.palette.background.secondaryButton.hover,
        }
    },
    btnIcon:{
        width: "2vw",
        height: "2vw",
    }
}));

const HighlightedMedia = ({ media }) => {
    const classes = useStyles();

    return (
        <Box
            className={classes.root}
            style={{
                backgroundImage: 
                    `linear-gradient(
                        to top,
                        rgba(0,0,0,.8) 0,
                        rgba(0,0,0,0) 5%,
                        rgba(0,0,0,0) 85%,
                        rgba(0,0,0,.5) 90%,
                        rgba(0,0,0,8) 100%),
                    url("${media.backgroundImgUrl}")`,
            }}
        >
            <Container maxWidth="xl">
                <Box className={classes.highlightedMedia}>
                    <img src={media.titleImgUrl} alt="" />
                    <Typography variant="h5" className={classes.title}>
                        {media.subtitleText}
                    </Typography>
                    <Typography variant="h5" className={classes.title}>
                        {media.descriptionText}
                    </Typography>
                    <Box>
                        <Button
                            variant="contained"
                            className={classes.button}
                            startIcon={<PlayArrowIcon className={classes.btnIcon}/>}
                            href={media.link}
                            disableElevation
                        >
                            Reproducir
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.button}
                            startIcon={<InfoOutlinedIcon className={classes.btnIcon}/>}
                            href="#"
                            disableElevation
                            disableFocusRipple
                        >
                            Más información
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default HighlightedMedia