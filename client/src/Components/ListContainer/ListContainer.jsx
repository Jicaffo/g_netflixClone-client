import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { SwiperBrowse } from '..';


const useStyles = makeStyles( (theme) => ({
    root:{
        position: "relative",
        top: "-20vh",
    }

}));

const ListContainer = ({ listArray }) => {

    const classes = useStyles();

    return (
        <Container maxWidth="xl" className={classes.root}>
            {/* {console.log(listArray)} */}
            {   
                listArray.map( list => {
                    // console.log(list);
                    return <SwiperBrowse list={list} key={list.listTitle}></SwiperBrowse>
                })
            }
        </Container>
    )
}

export default ListContainer