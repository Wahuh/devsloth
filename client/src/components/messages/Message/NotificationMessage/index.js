import React from "react";
import Typography from "../../../reuse/Typography";
import styles from "./NotificationMessage.scss";

const NotificationMessage = ({ text }) => (
    <div className={styles.NotificationMessage}>
        <Typography color="primary" type="body">
            {text}
        </Typography>
    </div>
);

export default NotificationMessage;
