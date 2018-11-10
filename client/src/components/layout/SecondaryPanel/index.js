import React from "react";
import styles from "./SecondaryPanel.scss";

const SecondaryPanel = ({ children }) => (
    <div className={styles.SecondaryPanel}>
        {children}
    </div>
);

export default SecondaryPanel;