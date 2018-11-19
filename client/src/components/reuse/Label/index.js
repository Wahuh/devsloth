import React from "react";
import { any, string } from "prop-types";
import styles from "./Label.scss";

const Label = ({ children, htmlFor, required }) => (
    <label className={styles.Label} htmlFor={htmlFor}>
        {required ? `${children} *` : children}
    </label>
)

Label.propTypes = {
    children: any,
    htmlFor: string,
}

export default Label;