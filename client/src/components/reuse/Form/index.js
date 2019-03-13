import React from "react";
import classNames from "classnames";
import styles from "./Form.scss";

const Form = ({ children, maxHeight, onSubmit }) => (
    <form className={classNames(styles.Form, { [styles.maxHeight]: maxHeight })} onSubmit={onSubmit}>
        {children}
    </form>
);

export default Form;