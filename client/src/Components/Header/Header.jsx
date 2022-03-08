import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './Header.styles';
import { Link, useLocation } from 'react-router-dom';

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
                    {location.pathname === "/" && <Link to={{ pathname: '/login' }} className={classes.iniciarSesion}>Iniciar sesion</Link>}                   
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;