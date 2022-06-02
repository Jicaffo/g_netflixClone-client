import React from 'react'
import { useContext } from 'react';
import BrowseContext from '../../Contexts/BrowseContext';
import { useStyles } from './ItemNotification.styles'

const ItemNotifitcation = ({ status, title, date }) => {
    const classes = useStyles();

  return (
    <li className={classes.notification}>
            <div className={classes.imageTextNotification}>
                <a className={`${classes.element} ${classes.image} ${classes.notificationLink}`} href="https://www.netflix.com/title/81350683">
                    <img className={classes.titleCard} src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABfC7FD1VN3rin01rL_LZzKQN0DGNm37UU7jIdug70nQxizBHeIUvwny8q2Ob-5u6x3PLRh6nLCAWvHGKeX4Sv2rKRquCVmZpAqa4JJxjPNjFQznh8_onYlZMbyIdb4i_vAaD0MM.jpg?r=963" srcset="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABfC7FD1VN3rin01rL_LZzKQN0DGNm37UU7jIdug70nQxizBHeIUvwny8q2Ob-5u6x3PLRh6nLCAWvHGKeX4Sv2rKRquCVmZpAqa4JJxjPNjFQznh8_onYlZMbyIdb4i_vAaD0MM.jpg?r=963 112w" alt="Un lugar seguro" sizes="112px" />
                </a>
                <a className={`${classes.element} ${classes.text} ${classes.notificationLink}`} href="https://www.netflix.com/title/81350683">
                    <div className={classes.header}>
                        <span>{status}</span>
                    </div>
                    <div className={classes.body}>
                        <span>{title}</span>
                    </div>
                    <div className={classes.age}>
                        <span>{date}</span>
                    </div>
                </a>
            </div>

    </li>
  )
}

export default ItemNotifitcation