import React from "react";
import styles from "../styles/sidebar.module.scss";

const Sidebar = (props) => {
    const { children } = props;
    return (
        <div className={`${styles.container} `}>
            <div className={styles.sidebarContainer}>This is the sidebar.</div>
            {children}
        </div>
    );
}
 
export default Sidebar;