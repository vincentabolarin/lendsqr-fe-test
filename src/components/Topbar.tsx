import React from "react";
import styles from "../styles/topbar.module.scss";

import SearchIcon from "../assets/searchIcon.svg";
import BellIcon from "../assets/bellIcon.svg";
import Dropdown from "../assets/dropdown.svg";

import Logo from "./Logo";
import { Link } from "react-router-dom";

const Topbar = () => {
    return (
      <div className={`${styles.container}`}>
        <div className={styles.left}>
          <Logo />
          <div className={styles.searchContainer}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for anything"
            />
            <p className={styles.iconContainer}>
              <img src={SearchIcon} alt="Search Icon" />
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <Link to="/dashboard">Docs</Link>
          <img src={BellIcon} alt="Bell Icon" />
          <div className={styles.avatar}>V</div>
          <div className={styles.profile}>
            <p className={styles.name}>Vincent</p>
            <img src={Dropdown} alt="" />
          </div>
        </div>
      </div>
    );
}
 
export default Topbar;