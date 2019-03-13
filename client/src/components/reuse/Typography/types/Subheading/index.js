import React from "react";
import styles from "./Subheading.scss";

const Subheading = ({ children, className }) => (
    <h3 className={`${styles.Subheading} ${className}`}>
        {children}
    </h3>
)

export default Subheading;