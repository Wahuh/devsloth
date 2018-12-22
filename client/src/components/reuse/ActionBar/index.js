import React from "react";
import BackButton from "../BackButton";
import styles from "./ActionBar.scss";

const ActionBar = ({ children }) => (
    <div className={styles.ActionBar}>
        {children}
    </div>
);

export default ActionBar;