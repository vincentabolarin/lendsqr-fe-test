import React from "react";
import styles from "../styles/sidebar.module.scss";

import { customersMenu, businessesMenu, settingsMenu } from "../constants/sidebarItems.ts";

const Sidebar = (props) => {
    const { children } = props;
    return (
        <div className={`${styles.container} `}>
            <div className={styles.sidebarContainer}>
                {
                    customersMenu.map((customersMenu) => {
                        return (
                          <div>
                            <img src={require("../assets/" + customersMenu.icon + ".svg")} alt={customersMenu.text} />
                            <h3>{ customersMenu.text }</h3>
                          </div>
                        );
                    })
                }
            </div>
            {children}
        </div>
    );
}
 
export default Sidebar;