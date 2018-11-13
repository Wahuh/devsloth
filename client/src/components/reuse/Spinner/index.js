import React, { Fragment } from "react";
import styles from "./Spinner.scss";

const Spinner = ({ spin }) => (
    <Fragment>
        <div className={spin ? `${styles.Spinner} ${styles.Spin}` : styles.Spinner}>
        </div>
    </Fragment>
);

export default Spinner;