import React, { useState, useEffect } from 'react'

import { Card } from '@material-ui/core';

import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core'
import { Container } from '@material-ui/core';

import { getMylist } from '../../services/myListGet'

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '3px',
        margin: '30px 3px'
    },
    container: {

        padding: '0',
        maxWidth: '100%',

        margin: '0 2vw',

        gridGap: '1rem',

        display: 'grid',


        ['@media (max-width: 2520px)']: { // eslint-disable-line no-useless-computed-key
            gridTemplateColumns: 'repeat(6, 1fr)',
        }
        ,
        ['@media (max-width: 1280px)']: { // eslint-disable-line no-useless-computed-key
            gridTemplateColumns: 'repeat(5, 1fr)',
        },
        ['@media (max-width: 1080px)']: { // eslint-disable-line no-useless-computed-key
            gridTemplateColumns: 'repeat(5, 1fr)',
        },
        ['@media (max-width: 980px)']: { // eslint-disable-line no-useless-computed-key
            gridTemplateColumns: 'repeat(3, 1fr)',
        },
        ['@media (max-width: 830px)']: { // eslint-disable-line no-useless-computed-key
            gridTemplateColumns: 'repeat(3, 1fr)',
        },

        ['@media (max-width: 425px)']: { // eslint-disable-line no-useless-computed-key
            gridTemplateColumns: 'repeat(1, 1fr)',
        }


    },
    divContainer: {
        margin: '0 auto',

        ['@media (max-width: 1620px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },
        ['@media (max-width: 1520px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },
        ['@media (max-width: 1345px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },
        ['@media (max-width: 1220px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },
        ['@media (max-width: 1080px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },
        ['@media (max-width: 980px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },
        ['@media (max-width: 830px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },

        ['@media (max-width: 700px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },
        ['@media (max-width: 580px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },

        ['@media (max-width: 570px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },

    },
    tittle: {
        display: 'flex',
        margin: '100px  20px'
    }
}));



const values = [
    {
        img: 'https://lfmagazine.photo/wp-content/uploads/2019/11/Peaky-blinder.jpg',
        name: 'peaky'
    },
    {
        img: 'https://lfmagazine.photo/wp-content/uploads/2019/11/Peaky-blinder.jpg',
        name: 'peaky'
    },
    {
        img: 'https://lfmagazine.photo/wp-content/uploads/2019/11/Peaky-blinder.jpg',
        name: 'peaky'
    },
    {
        img: 'https://lfmagazine.photo/wp-content/uploads/2019/11/Peaky-blinder.jpg',
        name: 'peaky'
    }, {
        img: 'https://lfmagazine.photo/wp-content/uploads/2019/11/Peaky-blinder.jpg',
        name: 'peaky'
    },
    {
        img: 'https://lfmagazine.photo/wp-content/uploads/2019/11/Peaky-blinder.jpg',
        name: 'peaky'
    },
    {
        img: 'https://lfmagazine.photo/wp-content/uploads/2019/11/Peaky-blinder.jpg',
        name: 'peaky'
    },
    {
        img: 'https://lfmagazine.photo/wp-content/uploads/2019/11/Peaky-blinder.jpg',
        name: 'peaky'
    }







]


const Mylist = () => {

    const classes = useStyles();
    // const [values, setValues] = useState([{}])

    // useEffect(() => {
    //     setValues(getMylist())
    //   }, [])


    return (
        <>

            <Typography
                className={classes.tittle}
                variant="h3"
                component="h3"

            >Mi lista</Typography>


            <div className={classes.container}>
                {
                    values.map(value => {
                        return (

                            <div className={classes.divContainer}>
                                <img src={value.img} className={classes.card} alt={value.name} />
                            </div>




                        )
                    })

                }

            </div>






        </>
    )
}

export default Mylist




