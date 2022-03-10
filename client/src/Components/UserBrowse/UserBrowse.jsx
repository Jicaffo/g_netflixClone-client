import React from 'react';
import { Box, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

// Ejemplos de película destacada, listado de películas y listado de listas de películas para utilizar temporalmente
const highlightedMovie = {
    backgroundImgUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb9zrJZCzWWOWP5CIL2SdDpBx-4JLVaJO0LJ-u8_BDW_sdIxq5b-lKooj4SSP9QwVBtXSkk-EKTaM6flxnHsKq6DMMZw.jpg?r=be2",
    titleImgUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZKs5-soLOHmu6m6EyWtdg0guNI5VwLCHQOqn7U7tlAHroNHELlws9qCxOOgf1Xq-6nCkCG-2VjtQ08DzHAsDb545N2vMCdtjzCbNzZzM9zPa1AbCBdEoQfUo4NMj-ZVNhtd5lHVo_ASMH6zcy6BorxtccPuDN1EnZz9OxAz2WHXJA.png?r=05f",
    subtitleText: "Nº2 en Argentina hoy",
    descriptionText: "Cuando un violento ataque en su pueblo saca a la luz amenazas ocultas y secretos mortales, una mujer comienza a descifrar el oscuro pasado de su madre.",
    movieLink: "https://www.netflix.com/watch/81056342?trackId=254015180&tctx=0%2C0%2C45a78b47-5bdd-4b40-a53d-4e39cce5f9ce-235618663%2C30449431-79ca-4fb7-927a-f9fae0dc8c03_49811758X20XX1646873762874%2C30449431-79ca-4fb7-927a-f9fae0dc8c03_ROOT%2C%2C%2C",
};
const exampleMediaList = [
    {
        mediaTitle: "Breaking Bad",
        imgPreviewUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUr3Y1-NF-H2vxX46gBEwdYqSlvDsY126karuPPoXnHjijxuk1cXPIb8lrLk8TfN3YXWzniCLhrTOROMXuLaKcji8lI.jpg?r=01d",
    },
    {
        mediaTitle: "Love Death Robots",
        imgPreviewUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQC1JY7P9GbinRKDRt3JwsenQv87EwcOXfQny9Mgagyw924kgI3KzqKtOgYNk1XL9hKl9GJ1jlieHpWgzXurA4UgnitxYNG3hL1kxEzE-6C6Z0Bo4BPSxPbTHXxy.jpg?r=f81",
    },
    {
        mediaTitle: "Abstract",
        imgPreviewUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZMrBgTnAOsbmSKMoF5txrtzeJwtE1q9qb0p8YkjmTSHk36ZJ3S_XIij4_SLcR5I_GSu_VuVuAm-RzQhcGexDN5dFlLazbHRGWKQbq94OL4lCfDtx2zh_GHuiaiJ.jpg?r=77a",
    },
    {
        mediaTitle: "Sense 8",
        imgPreviewUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaBxnhm8Q_msAl3ecVPdZZZYiXD75u277RV0IXIEdVF1orKMsk2VfEK_pni8-yZzXjBxxN2RhJA8QXI8GlWs6P_nq0rmGF5yaoB2WFm3LUYoqIAtiBwuj5lwJh9L.jpg?r=433",
    },
    {
        mediaTitle: "Dark",
        imgPreviewUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQkKn-bheDqrWf4mKNW88pOLB1DrWIsjtVnULzWmd35rUGi_rGgdBvI38uVoRTk06jNoUwFPH0YNpNc2wHrgABtxxVqVz33w0rBVXwOO2ILOFQ_5cWN19OQkYKib.jpg?r=d31",
    },
    {
        mediaTitle: "Black Mirror",
        imgPreviewUrl: "https://occ-0-5386-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSL1eCLKJlSXctXwGwE1tMT5sVoyIImwkpnzopOZp7nuYVVSX187dKbT58aQAFjvYPFCdGQ4psIHis0vHn5yK345Gr-AhAuHcPAivWKlwRKkPWjsvkuTu2vXv3A_.jpg?r=bfd",
    },
];
const swipers = [
    {
        listTitle: "Mi Lista",
        mediaList: exampleMediaList,
    },
    {
        listTitle: "Continuar viendo",
        mediaList: exampleMediaList,
    },
    {
        listTitle: "Populares en Netflix",
        mediaList: exampleMediaList,
    },
    {
        listTitle: "Tendencias",
        mediaList: exampleMediaList,
    },
    {
        listTitle: "Nuevos Lanzamientos",
        mediaList: exampleMediaList,
    },
];

const useStyles = makeStyles( (theme) => ({
    root:{
        paddingTop: "80px",
        backgroundImage: `
            linear-gradient(
                to top,
                rgba(0,0,0,.8) 0,
                rgba(0,0,0,0) 5%,
                rgba(0,0,0,0) 85%,
                rgba(0,0,0,.5) 90%,
                rgba(0,0,0,8) 100%),
            url("${highlightedMovie.backgroundImgUrl}")`,
        backgroundSize: "cover",  
        height: "56.23vw", //Ratio calculado de las dimensiones de la imagen para que se vea el alto completo (alto = 56.23% del ancho)
        color: theme.palette.contrastText,
        fontFamily: "'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
    },
    highlightedMovie:{
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

const UserBrowse = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root} >
            <Container maxWidth="xl">
                <Box className={classes.highlightedMovie}>
                    <img src={highlightedMovie.titleImgUrl} alt="" />
                    <Typography variant="h5" className={classes.title}>
                        {highlightedMovie.subtitleText}
                    </Typography>
                    <Typography variant="h5" className={classes.title}>
                        {highlightedMovie.descriptionText}
                    </Typography>
                    <Box>
                        <Button
                            variant="contained"
                            className={classes.button}
                            startIcon={<PlayArrowIcon className={classes.btnIcon}/>}
                            href={highlightedMovie.movieLink}
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
                <Box>
                    {/* TODO: Componentes de swiper / slider a mapear
                        <Swiper title={swipers[0].listTitle} itemList={swipers[0].mediaList} />
                    */}
                </Box>
            </Container>
        </Box>
    )
}

export default UserBrowse