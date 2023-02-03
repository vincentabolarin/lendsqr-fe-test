import React from "react";

import styles from "../styles/card.module.scss";

interface CardProps {
    avatar: string;
    detail: string;
    count: string;
}

const Card = (props: CardProps) => {
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