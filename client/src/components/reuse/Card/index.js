import React from "react";
import styles from "./Card.scss";

const Card = () => (
    <div className={styles.Card}>
        {children}
    </div>
)

export default Card;