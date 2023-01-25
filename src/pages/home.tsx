import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.scss"

import LendsqrLogoIcon from "../../src/assets/lendsqrLogoIcon.svg";

const Home = () => {
    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.logoContainer}>
                <img src={LendsqrLogoIcon} className={styles.logo} alt="logo" />
            </div>
            <Link to="login">
                <button>Login</button>
            </Link>
        </div>
    );
}
 
export default Home;