import React from "react";
import { Link } from "react-router-dom";

import LendsqrLogoIcon from "../../src/assets/lendsqrLogoIcon.svg";

const Home = () => {
    return (
        <div>
            <div className="App-header">
                <img src={LendsqrLogoIcon} className="App-logo" alt="logo" />
            </div>
            <Link to="login">
                <button>Login</button>
            </Link>
        </div>
    );
}
 
export default Home;