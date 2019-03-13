import React from "react";
import styles from "./SettingsLayout.scss";

const SettingsLayout = ({ children }) => (
    <div className={styles.SettingsLayout}>
        {children}
    </div>
);

export default SettingsLayout;