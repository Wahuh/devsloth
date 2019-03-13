import React from "react";
import Typography from "../../../reuse/Typography";
import styles from "./NotificationMessage.scss";

const NotificationMessage = ({ children }) => (
    <div className={styles.NotificationMessage}>
        <Typography color="primary" type="body">
            {children}
        </Typography>
    </div>
);

export default NotificationMessage;
