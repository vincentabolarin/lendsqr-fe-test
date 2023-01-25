import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/login.module.scss";

import LogoIcon from "../assets/lendsqrLogoIcon.svg";
import LogoText from "../assets/lendsqrLogoText.svg";
import LoginArt from "../assets/loginArt.svg";

const Login = () => {
    return (
      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
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

          <div className={styles.loginArtContainer}>
            <img src={LoginArt} alt="" />
          </div>
        </div>
        
        <div className={styles.right}>
          <div className="heading">
            <h1>Welcome!</h1>
          </div>

          <div className="subheading">
            <p>Enter details to login.</p>
          </div>

          <form>
            <input type="email" name="email" id="email" placeholder="Name" />

            <div className={styles.passwordContainer}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <p className={styles.showPassword}>SHOW</p>
            </div>

            <p className={styles.forgotPassword}>FORGOT PASSWORD?</p>

            <input type="submit" value="LOG IN" />
          </form>
        </div>
      </div>
    );
}
 
export default Login;