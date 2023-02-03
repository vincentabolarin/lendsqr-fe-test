import React, { useState, useEffect } from "react";
import styles from "../styles/dashboard.module.scss";

import Topbar from "../components/Topbar";
import Card from "../components/Card";
import Users from "../components/Users"

import UsersIcon from "../assets/usersIcon.svg";
import ActiveUsersIcon from "../assets/activeUsersIcon.svg";
import UsersWithLoansIcon from "../assets/usersWithLoansIcon.svg";
import UsersWithSavingsIcon from "../assets/usersWithSavingsIcon.svg";

import Sidebar from "../components/Sidebar";

const Dashboard = () => {

    const apiUrl =
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
    
    const [users, setUsers] = useState<any>("");
    let [activeUsersCount, setActiveUsersCount] = useState<number>(0);
    // let activeUsersCount: number = 0;
    // let activeUsers;

    useEffect(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        });
        
        checkActiveUsersCount();
    }, []);

    const checkActiveUsersCount = () => {
        const today = new Date();
        for (let i = 0; i < users.length; i++) {
            const lastActiveDate = Date.parse(new Date(users[i].lastActiveDate).toDateString());
            const referenceDate = Date.parse(today.toDateString()) - 30;
            console.log(lastActiveDate);
            console.log(referenceDate);
            console.log("This is a log.");

            if (lastActiveDate > referenceDate) {
                return setActiveUsersCount(activeUsersCount++);
            }
        }
    }

    return (
      <div className={`${styles.container} container`}>
        <Topbar />
        
        <Sidebar>
            <div className={styles.mainContent}>
                <div className={styles.cards}>
                    <Card avatar={UsersIcon} detail="USERS" count={users.length} />
                    <Card avatar={ActiveUsersIcon} detail="ACTIVE USERS" count={users.length} />
                    <Card avatar={UsersWithLoansIcon} detail="USERS WITH LOANS" count={users.length} />
                    <Card avatar={UsersWithSavingsIcon} detail="USERS WITH SAVINGS" count={users.length} />
                </div>
                
                <div className={styles.users}>
                    <Users />
                </div>
            </div>
        </Sidebar>  
      </div>
    );
}
 
export default Dashboard;