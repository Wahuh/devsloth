import React from "react";
import styles from "./TabBar.scss";

const TabBar = ({ children }) => (
    <div className={styles.TabBar}>
        {children}
    </div>
);

export default TabBar;