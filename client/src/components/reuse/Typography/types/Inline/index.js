import React from "react";
import styles from "./Inline.scss";

const Inline = ({ children, className }) => (
    <span className={`${styles.Inline} ${className}`}>
        {children}
    </span>
)

export default Inline;