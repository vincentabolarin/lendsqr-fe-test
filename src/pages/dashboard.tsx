import React from "react";
import styles from "../styles/dashboard.module.scss";

import Topbar from "../components/Topbar.tsx";
import Card from "../components/Card.tsx";

import UsersIcon from "../assets/usersIcon.svg";
import ActiveUsersIcon from "../assets/activeUsersIcon.svg";
import UsersWithLoansIcon from "../assets/usersWithLoansIcon.svg";
import UsersWithSavingsIcon from "../assets/usersWithSavingsIcon.svg";

import Sidebar from "../components/Sidebar.tsx";

const Dashboard = () => {
    return (
      <div className={`${styles.container} container`}>
        <Topbar />
        
        <Sidebar>
            <div className={styles.mainContent}>
                <div className={styles.cards}>
                    <Card avatar={UsersIcon} detail="USERS" count={2453} />
                    <Card avatar={ActiveUsersIcon} detail="ACTIVE USERS" count={2453} />
                    <Card avatar={UsersWithLoansIcon} detail="USERS WITH LOANS" count={2453} />
                    <Card avatar={UsersWithSavingsIcon} detail="USERS WITH SAVINGS" count={2453} />
                </div>
            </div>
        </Sidebar>  
      </div>
    );
}
 
export default Dashboard;