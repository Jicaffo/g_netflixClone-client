import React from "react";
import { itemList } from "../../Utils";
import ItemList from "../ItemList/ItemList";
import { useStyles } from "./ModalComponent.styles";

const ModalComponent = ({ isResponsive }) => {
    const classes = useStyles();

    return (
        <div
            role="menu"
            className={
                isResponsive
                    ? classes.responsiveMenu
                    : `${classes.responsiveMenu} ${classes.disabled}`
            }
            style={{ opacity: isResponsive ? "1" : "0", transitionDuration: "150ms" }}
        >
            <div className={classes.arrow}></div>
            <div className={classes.topbar}></div>
            <ul className={classes.ul}>
              {
                  itemList?.map(item => {
                      return (
                          <ItemList 
                            name={item.name} 
                            route={item.route}
                            key={item.id}/>
                      )
                  })
              }
            </ul>
        </div>
    );
};

export default ModalComponent;
