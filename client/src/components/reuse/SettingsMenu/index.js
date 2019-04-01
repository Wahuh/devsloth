import React from "react";
import styles from "./SettingsMenu.scss";

const SettingsMenu = ({ children }) => (
    <section className={styles.SettingsMenu}>
        {children}
    </section>
)

export default SettingsMenu;