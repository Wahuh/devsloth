import React from "react";
import Typography from "../Typography";
import styles from "./SuccessMessage.scss";

const SuccessMessage = ({ message }) => (
    <div className={styles.SuccessMessage}>
        <Typography type="button">{message}</Typography>
    </div>

)

export default SuccessMessage;