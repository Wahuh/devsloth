import React from "react";
import { any, string } from "prop-types";
import styles from "./Label.scss";

const Label = ({ children, htmlFor }) => (
    <label className={styles.Label} htmlFor={htmlFor}>
        {children}
    </label>
)

Label.propTypes = {
    children: any,
    htmlFor: string,
}

export default Label;