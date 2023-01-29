import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/logo.module.scss";

import LogoIcon from "../assets/lendsqrLogoIcon.svg";
import LogoText from "../assets/lendsqrLogoText.svg";

const Logo = () => {
    return (
      <div>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.link}>
            <div className={styles.logoIcon}>
              <img src={LogoIcon} alt="Logo Icon" />
            </div>
            <div className={styles.logoText}>
              <img src={LogoText} alt="Logo Text" />
            </div>
          </Link>
        </div>
      </div>
    );
}
 
export default Logo;