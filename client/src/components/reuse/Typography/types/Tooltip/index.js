import React from "react";
import styles from "./Tooltip.scss";

const Tooltip = ({ children, className }) => (
    <p className={`${styles.Tooltip} ${className}`}>
        {children}
    </p>
)

export default Tooltip;