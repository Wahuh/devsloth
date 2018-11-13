import React from "react";
import Typography from "../Typography";
import styles from "./Label.scss";

const Label = ({ children, htmlFor }) => (
    <label className={styles.Label} htmlFor={htmlFor}>
        <Typography type="button">
            {children}
        </Typography>
    </label>
)

export default Label;