import React from "react";
import Column from "../../reuse/Column";
import styles from "./Content.scss";

const Content = ({ children }) => (
    <Column className={styles.Content}>
        {children}
    </Column>
);

export default Content;