import React from "react";
import styles from "./Caption.scss";

const Caption = ({ children, className }) => (
    <p className={`${styles.Caption} ${className}`}>
        {children}
    </p>
)

export default Caption;