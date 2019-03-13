import React from "react";
import Typography from "../Typography";
import styles from "./WarningMessage.scss";

const WarningMessage = ({ message }) => (
    <div className={styles.WarningMessage}>
        <Typography bold color="primary">
            {message}
        </Typography>
    </div>
);

export default WarningMessage;