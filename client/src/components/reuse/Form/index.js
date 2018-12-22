import React from "react";
import styles from "./Form.scss";

const Form = ({ children, onSubmit }) => (
    <form className={styles.Form} onSubmit={onSubmit}>
        {children}
    </form>
);

export default Form;