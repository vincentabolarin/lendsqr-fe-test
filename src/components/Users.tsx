import React, { useState, useEffect } from "react";

import styles from "../styles/users.module.scss";

import Filter from "../assets/filter.svg";
import Options from "../assets/options.svg";

const Users = () => {

    const apiUrl = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

    const [users, setUsers] = useState<any>("");

    useEffect(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          console.log(users);
        })
    }, []);

    users.forEach((user: any) => {
      user.createdAt = new Date(user.createdAt).toDateString();
    });

    return (
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>
                <span>ORGANIZATION</span>
                <img src={Filter} alt="Filter" />
              </th>
              <th>
                <span>USERNAME</span>
                <img src={Filter} alt="Filter" />
              </th>
              <th className={styles.email}>
                <span>EMAIL</span>
                <img src={Filter} alt="Filter" />
              </th>
              <th>
                <span>PHONE NUMBER</span>
                <img src={Filter} alt="Filter" />
              </th>
              <th>
                <span>DATE JOINED</span>
                <img src={Filter} alt="Filter" />
              </th>
              <th>
                <span>STATUS</span>
                <img src={Filter} alt="Filter" />
              </th>
            </tr>
          </thead>

          <tbody>
            {
                users.map((user: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{user.orgName}</td>
                        <td>{user.userName}</td>
                        <td className={styles.email}>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.createdAt}</td>
                        <td>Active</td>
                        <td>
                            <img src={Options} alt="Options" />
                        </td>
                      </tr>
                    );
                })
            }
          </tbody>
        </table>
      </div>
    );
}
 
export default Users;