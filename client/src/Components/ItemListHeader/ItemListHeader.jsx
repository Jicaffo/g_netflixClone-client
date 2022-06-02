import React from 'react'
import { useLocation } from 'react-router-dom';
import { useStyles } from './ItemListHeader.styles';

const ItemListHeader = ({ name, route}) => {
    const classes = useStyles();

    const location = useLocation();
    
    return (
        <li className={classes.items}>
            <a
                className={
                    location.pathname === route
                        ? `${classes.link} active`
                        : classes.link
                }
                href={route}
            >
                {name}
            </a>
        </li>
    )
}

export default ItemListHeader