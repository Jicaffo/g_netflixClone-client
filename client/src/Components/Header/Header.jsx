import React, { useEffect } from 'react';
import {AppBar, Toolbar, Box} from '@material-ui/core/';
import { useStyles } from './Header.styles';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

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
                    {location.pathname === "/" &&
                        <Box className={classes.rightContent}>
                            <LanguageSelector/>
                            <Link to={{ pathname: '/login' }} className={classes.iniciarSesion}>Iniciar sesion</Link>
                        </Box>}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;