import React from "react";
import styles from "./FormGroup.scss";

const FormGroup = ({ children }) => (
    <div className={styles.FormGroup}>
        {children}
    </div>
);

export default FormGroup;