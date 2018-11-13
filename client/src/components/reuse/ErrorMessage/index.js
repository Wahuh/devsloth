import React from "react";
import Typography from "../Typography";
import styles from "./ErrorMessage.scss";

const ErrorMessage = ({ message }) => (
    <div className={styles.ErrorMessage}>
        <Typography type="button">{message}</Typography>
    </div>
)

export default ErrorMessage;