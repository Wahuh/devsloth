import React from "react";
import styles from "./SecondaryHeader.scss";

const SecondaryHeader = ({ children }) => (
    <section className={styles.SecondaryHeader}>
        {children}
    </section>   
)

export default SecondaryHeader;