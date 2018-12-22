import React from "react";
import styles from "./SideMenuRight.scss";

const SideMenuRight = ({ children, fixedComponent }) => (
    <div className={styles.SideMenuRight}>
        <div className={styles.ScrollContainer}>
            {children}
        </div>
        <div className={styles.FixedContainer}>
            {fixedComponent}
        </div>
    </div>
);

export default SideMenuRight;