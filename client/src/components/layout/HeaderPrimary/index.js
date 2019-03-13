import React from "react";
import styles from "./HeaderPrimary.scss";

const HeaderPrimary = ({ children }) => (
    <section className={styles.HeaderPrimary}>
        {children}
    </section>   
)

export default HeaderPrimary;