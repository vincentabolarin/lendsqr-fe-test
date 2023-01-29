import React from "react";

import styles from "../styles/card.module.scss";

const Card = (props) => {
    const { avatar, detail, count } = props;
    return (
        <div className={styles.container}>
            <img src={avatar} alt="" />
            <p className={styles.detail}>{detail}</p>
            <p className={styles.count}>{count}</p>
        </div>
    );
}
 
export default Card;