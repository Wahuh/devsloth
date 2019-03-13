import React from "react";
import Typography from "../Typography";
import styles from "./SuccessMessage.scss";

const SuccessMessage = ({ message }) => (
    <div className={styles.SuccessMessage}>
        <Typography>{message}</Typography>
    </div>

)

export default SuccessMessage;