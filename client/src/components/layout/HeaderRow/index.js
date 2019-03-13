import React from "react";
import styles from "./HeaderRow.scss";

const HeaderRow = ({ children }) => (
    <div className={styles.HeaderRow}>
        {children}
    </div>
)

export default HeaderRow;