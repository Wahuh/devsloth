import React from "react";
import styles from "./Description.scss";

const Description = ({ children, className }) => (
    <p className={`${styles.Description} ${className}`}>
        {children}
    </p>
)

export default Description;