import React, { Fragment } from "react";
import styles from "./Spinner.scss";

const Spinner = ({ spin }) => (
    <div className={styles.SpinnerContainer}>
        <div className={spin ? `${styles.Spinner} ${styles.Spin}` : styles.Spinner}></div>
        <div className={spin ? `${styles.InnerSpinner} ${styles.SpinSlow}` : styles.InnerSpinner}></div>
    </div>
);

export default Spinner;
//spin ? `${styles.Spinner} ${styles.Spin}` :