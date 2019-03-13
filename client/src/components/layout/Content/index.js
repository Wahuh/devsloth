import React from "react";
import Column from "../../reuse/Column";
import styles from "./Content.scss";

const Content = ({ children }) => (
    <div className={styles.Content}>
        {children}
    </div>
);

export default Content;