import React from "react";
import { any, string } from "prop-types";
import styles from "./FloatLabel.scss";

const FloatLabel = ({ children, className, htmlFor }) => (
    <label className={className ? `${styles.FloatLabel} ${className}` : styles.FloatLabel} htmlFor={htmlFor}>
        {children}
    </label>
)

FloatLabel.propTypes = {
    children: any,
    htmlFor: string,
}

export default FloatLabel;