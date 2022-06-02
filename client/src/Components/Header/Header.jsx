/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { AppBar, Toolbar, Box } from "@material-ui/core/";
import { useStyles } from "./Header.styles";
import { Link, useLocation } from "react-router-dom";
import { LanguageSelector } from "..";
import { IoMdArrowDropdown } from "react-icons/io";
import ModalComponent from "../ModalComponent/ModalComponent";
import { handleResponsive, itemList } from "../../Utils/index";
import ItemListHeader from "../ItemListHeader/ItemListHeader";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import { useContext } from "react";
import BrowseContext from "../../Contexts/BrowseContext";

const Header = () => {
    const classes = useStyles();
    const location = useLocation();
    
    const { isResponsive, setIsResponsive } = useContext(BrowseContext);

    return (
        <div>
            <AppBar position="absolute" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <Link to={{ pathname: "/" }}>
                        <svg className={classes.logo} />
                    </Link>
                    {location.pathname === "/" && (
                        <Box className={classes.rightContent}>
                            <LanguageSelector />
                            <Link
                                to={{ pathname: "/login" }}
                                className={classes.iniciarSesion}
                            >
                                Iniciar sesion
                            </Link>
                        </Box>
                    )}
                    {location.pathname === "/browse" && (
                        <>
                            <ul className={classes.listItems}>
                                <li className={classes.dropDown} onClick={() => handleResponsive(isResponsive, setIsResponsive)}>
                                    <a
                                        className={classes.link}
                                        role="button"
                                        aria-haspopup="true"
                                        tabIndex="0"
                                    >
                                        Explorar
                                    </a>
                                    <IoMdArrowDropdown />
                                </li>

                                {
                                    itemList?.map(item => {
                                        return (
                                            <ItemListHeader
                                                name={item.name}
                                                route={item.route}
                                                key={item.id} />
                                        )
                                    })
                                }
                            </ul>
                            <SecondaryNavigation />
                            <ModalComponent
                                isResponsive={isResponsive} />
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
