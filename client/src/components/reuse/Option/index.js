import React from "react";
import styles from "./Option.scss";
const Option = ({ children, value }) => (
    <option 
        className={styles.Option}
        value={value}
    >
        {children}
    </option>
);

export default Option;