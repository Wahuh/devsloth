import React from "react";
import styles from "./SideMenuRight.scss";

const SideMenuRight = ({ children }) => (
    <div className={styles.SideMenuRight}>
        {children}
    </div>
);

export default SideMenuRight;