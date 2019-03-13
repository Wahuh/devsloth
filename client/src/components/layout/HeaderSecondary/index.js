import React from "react";
import styles from "./HeaderSecondary.scss";

const HeaderSecondary = ({ children }) => (
    <section className={styles.HeaderSecondary}>
        {children}
    </section>   
)

export default HeaderSecondary;