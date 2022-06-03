import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { SwiperBrowse } from '..';
import UserDataContext from '../../Contexts/UserDataContext'
import ApiCallsContext from '../../Contexts/ApiCallsContext'
import { get } from '../../Services/apiCalls'

const useStyles = makeStyles( (theme) => ({
    root:{
        position: "relative",
        top: "-20vh",
    }
}));

const ListContainer = ({ listArray }) => {

    const classes = useStyles();
    const { currentProfile } = useContext(UserDataContext) // Si se requiere llega correctamente
    const apiData = useContext(ApiCallsContext);
    const [dataFetched, setDataFetched] = useState(false)
    const [mediaList, setMediaList] = useState(null)

    useEffect(async ()=>{
        //console.log("(useEffect): dataFetched -> false")
        setDataFetched(false)
        const url = apiData.BASE_URL + "/media"
        const res = await get(url)

        const newMediaList = {
            name: "Todas las películas (desde DB)",
            items: res.data.mediaList
        };
        setMediaList(newMediaList)
        //console.log("(useEffect): set(newMediaList)")

        setDataFetched(true)
        //console.log("(useEffect): dataFetched -> true, newMediaList = ", newMediaList)
        
    },[])
    
    return (
        <Container maxWidth="xl" className={classes.root}>
            {/* { console.log("(return) dataFetched = ", dataFetched) } */}
            {/* // NTH: Mejorar con un loader */}
            { /*console.log("currentProfile", currentProfile) /*No encontré una mejor forma de loguearlo, se repite 3veces al cargar */}

            { !dataFetched ? `Cargando lista...` : <SwiperBrowse list={mediaList} key={mediaList.name}></SwiperBrowse> }

            {/* { console.log("mediaList (return), 1ro, [3 items]: ", mediaList) } */}
            {   
                listArray.map( list => {
                    // console.log(list);
                    return <SwiperBrowse list={list} key={list.name}></SwiperBrowse>
                })
            }
        </Container>
    )
}

export default ListContainer