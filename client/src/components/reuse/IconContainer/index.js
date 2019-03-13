import React from "react";
import styles from "./IconContainer.scss";

const IconContainer = ({ children }) => (
    <div className={styles.IconContainer}>{children}</div>
);

export default IconContainer;