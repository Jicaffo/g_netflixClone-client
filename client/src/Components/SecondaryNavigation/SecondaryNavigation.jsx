import React from 'react'
import { itemsSecondaryNavigation } from '../../Utils';
import ItemSecondary from '../ItemSecondary/ItemSecondary';

import { useStyles } from './SecondaryNavigation.styles';

const SecondaryNavigation = () => {
    const classes = useStyles();

    return (
        <div className={classes.secondaryNavigation}>
            {
                itemsSecondaryNavigation?.map(item => {
                    return (
                        <ItemSecondary 
                            name={item.name} 
                            id={item.id}
                            key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default SecondaryNavigation