import React, { useContext } from 'react';
import BrowseContext from '../../Contexts/BrowseContext';
import { USERS_MOCKED } from '../../Utils';
import ItemUser from '../ItemUser/ItemUser';
import { useStyles } from './ModalUsers.styles';

const ModalUsers = () => {

    const classes = useStyles();

    const { isVisibleModalUsers } = useContext(BrowseContext);

    return (
        <div className={ isVisibleModalUsers ? classes.modalUsersActive : classes.modalUsers } >
            <div className={classes.arrow}></div>
            <ul className={classes.ul}>
                <li className={classes.subMenu}>
                    <ul className={classes.usersContainer}>
                        <li className={classes.users}>
                            {/* {USERS_MOCKED?.map(item => {
                                return (
                                    <ItemUser 
                                        image={item.image} 
                                        name={item.name} 
                                        role={item.role}
                                        key={item.id} />
                                )
                            })} */}
                        </li>
                        <li className={classes.kids}>Niños</li>
                        <li className={classes.profileAndHelp}>
                            <a className={classes.profile}>

                            </a>
                            <a className={classes.help}>
                            
                            </a>
                        </li>
                        <li className={classes.closeSession}>Cerrar sesión en Netflix</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default ModalUsers