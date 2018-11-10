import React from "react";
import styles from "./Header.scss";

const Header = ({ children }) => (
    <header className={styles.Header}>
        {children}
    </header>   
)

export default Header;