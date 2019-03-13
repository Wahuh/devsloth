import React from "react";
import styles from "./Heading.scss";

const Heading = ({ children, className }) => (
    <h2 className={`${styles.Heading} ${className}`}>
        {children}
    </h2>
)

export default Heading;