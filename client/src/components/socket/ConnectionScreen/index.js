import React from "react";
import styles from "./ConnectionScreen";
import FetchingMessage from "../../reuse/FetchingMessage";

const ConnectionScreen = () => (
    <div className={styles.ConnectionScreen}>
        <FetchingMessage message="Connecting to chat" />
    </div>
);

export default ConnectionScreen;