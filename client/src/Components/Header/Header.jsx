import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './Header.styles';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {

    const classes = useStyles();

    return (
        <div >
            <AppBar position="absolute" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <svg className={classes.logo} />
                    {window.location.pathname === "/" && <Link className={classes.iniciarSesion}>Iniciar sesion</Link>}                   
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;