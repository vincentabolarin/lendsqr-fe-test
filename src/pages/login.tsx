import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "../styles/login.module.scss";

import LogoIcon from "../assets/lendsqrLogoIcon.svg";
import LogoText from "../assets/lendsqrLogoText.svg";
import LoginArt from "../assets/loginArt.svg";

const Login = () => {

  const [users, setUsers] = useState(null);
  const apiUrl = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.success("Login successful");
    navigate("/dashboard");
  }

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

        <form onSubmit={handleSubmit}>
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