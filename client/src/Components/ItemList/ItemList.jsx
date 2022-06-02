import React from 'react'
import { useLocation } from 'react-router-dom';
import {useStyles} from './ItemList.styles';

const ItemList = ({ name, route }) => {
  const classes = useStyles();

  const location = useLocation();

  return (
    <li className={classes.li} role="none">
      <a
        className={
          location.pathname === route
            ? `${classes.a} active`
            : classes.a
        }
        href={route}
      >
        {name}  
      </a>
    </li>
  )
}

export default ItemList