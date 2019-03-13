import React, { Fragment } from "react";
import classNames from "classnames";
import styles from "./Spinner.scss";

const sizes = {
    "sm": styles.SpinnerSmall,
    "lg": styles.SpinnerContainer
};

const Spinner = ({ spin, size }) => (
    <div className={classNames(sizes[size])}>
        <div className={classNames({ [styles.Spin]: spin })}></div>
        <div className={classNames({ [styles.SpinSlow]: spin })}></div>
    </div>
);

export default Spinner;
//spin ? `${styles.Spinner} ${styles.Spin}` :