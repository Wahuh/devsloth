import React from "react";
import styles from "./SettingsNav.scss";

const SettingsNav = ({ children }) => (
    <nav className={styles.SettingsNav}>
        {children}
    </nav>
)

export default SettingsNav;