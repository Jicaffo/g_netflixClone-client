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

const allMediaList = {
    name: "Todas las películassss",
    items: [
        {
            title:"Emily in Paris",
            img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd4okK-9R6vjvoPkB6Msrd44BUNHa5WZhyZDXeldFOXHinLPDExremWPt334t8zg1SAezDERP4OwERhB5tLEjVB20Wb3g71OJ7OfH-doY16O4zPqfboghX_DaV9h.jpg?r=cd9"
        },
        {
            title:"Fin de semana en Croacia",
            img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABezpQUda_XVtPmmtYQEGK-iR9B3zss0Zsay1wOkR9pBT5ipxtM86IonFuT6tjGbIm3tSh1KP_SsgP1gRaKKjFgOVlciFekWfIusKjSTzxcCcZeiF4nahcingdnm6.jpg?r=4d3"
        },
        {
            title:"Estamos muertos",
            img:"https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeoK2tWCAEVCngkmcH6kC6HZ38st4knkVprMpHqknYoHeQxoVos44chJXxvwoe4LEsvkSxUhXATsZ4YNCtEwSUuoXtVxS_BKF5ZqdCVqwKL_2qJEsVax2Sz4iwFk.jpg?r=f88"
        }
    ]
}

// const getAllMedia = async () => {

// }

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

            {console.log("currentProfile",currentProfile)} 

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