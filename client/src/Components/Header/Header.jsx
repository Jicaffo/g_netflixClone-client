import React from 'react';
import {AppBar, Toolbar, Box} from '@material-ui/core/';
import { useStyles } from './Header.styles';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSelector } from '..';

const handleClick = (e) => {
    //e.preventDefault()
    //console.log(localStorage.getItem("token"))
    localStorage.removeItem("token")
    //console.log(localStorage.getItem("token"))
}

const Header = () => {

    const classes = useStyles();
    const location = useLocation();

    return (
        <div >
            <AppBar position="absolute" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <Link to={{ pathname: '/' }}>
                        <svg className={classes.logo} />
                    </Link>
                        <Box className={classes.rightContent}>
                            <Box className={classes.rightContent}>
                                {location.pathname === "/" &&
                                    <>
                                        <LanguageSelector/>
                                        <Link to={{ pathname: '/login' }} className={classes.iniciarSesion}>Iniciar sesion</Link>
                                    </>
                                }   
                                {(location.pathname === "/browse" || location.pathname === "/profiles") &&
                                    <Link
                                        to={{ pathname: '/login' }}
                                        className={classes.iniciarSesion}
                                        onClick={handleClick}
                                    >
                                        Cerrar sesion
                                    </Link>
                                }
                                {location.pathname === "/browse" &&
                                    <Box className={classes.rightContent}>
                                        <Link
                                        to={{ pathname: '/profiles' }}
                                        //onClick={}
                                        >
                                            <img src="https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71" width="32px"alt="Current Profile Avatar" />
                                        </Link>
                                    
                                    </Box>}  
                            </Box>           
                        </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;