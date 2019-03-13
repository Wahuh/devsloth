import React from "react";
import styles from "./Main.scss";

const Main = ({ children }) => (
    <main className={styles.Main}>
        {children}
    </main>
)

export default Main;