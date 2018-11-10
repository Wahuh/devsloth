import React from "react";
import styles from "./MainPanel.scss";

const MainPanel = ({ children }) => (
    <div className={styles.MainPanel}>
        {children}
    </div>
);

export default MainPanel;