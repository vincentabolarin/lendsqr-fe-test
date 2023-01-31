import React from "react";
import styles from "../styles/sidebar.module.scss";

import { customersMenu, businessesMenu, settingsMenu } from "../constants/sidebarItems.ts";

import SwitchOrganization from "../assets/switchOrganization.svg";
import Dropdown from "../assets/dropdown.svg";
import Dashboard from "../assets/dashboard.svg";

const Sidebar = (props) => {
    const { children } = props;
    return (
      <div className={`${styles.container} `}>
        <div className={styles.sidebarContainer}>
          <div className={`${styles.sidebarItem} ${styles.switchOrganization}`}>
            <img src={SwitchOrganization} alt="Switch Organization" />
            <p>Switch Organization</p>
            <img src={Dropdown} alt="Dropdown" />
          </div>

          <div className={`${styles.sidebarItem} ${styles.dashboard}`}>
            <img src={Dashboard} alt="Dashboard" />
            <p>Dashboard</p>
          </div>

          <p className={styles.heading}>CUSTOMERS</p>
          {customersMenu.map((customersMenu, index) => {
            return (
              <div className={styles.sidebarItem} key={index}>
                <img
                  src={require("../assets/" + customersMenu.icon + ".svg")}
                  alt={customersMenu.text}
                />
                <p>{customersMenu.text}</p>
              </div>
            );
          })}

          <p className={styles.heading}>BUSINESSES</p>
          {businessesMenu.map((businessesMenu, index) => {
            return (
              <div className={styles.sidebarItem} key={index}>
                <img
                  src={require("../assets/" + businessesMenu.icon + ".svg")}
                  alt={businessesMenu.text}
                />
                <p>{businessesMenu.text}</p>
              </div>
            );
          })}

          <p className={styles.heading}>SETTINGS</p>
          {settingsMenu.map((settingsMenu, index) => {
            return (
              <div className={styles.sidebarItem} key={index}>
                <img
                  src={require("../assets/" + settingsMenu.icon + ".svg")}
                  alt={settingsMenu.text}
                />
                <p>{settingsMenu.text}</p>
              </div>
            );
          })}
        </div>
        {children}
      </div>
    );
}
 
export default Sidebar;