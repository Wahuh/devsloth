import React from "react";
import styles from "./Body.scss";

const Body = ({ children, className }) => (
    <p className={`${styles.Body} ${className}`}>
        {children}
    </p>
)

export default Body;