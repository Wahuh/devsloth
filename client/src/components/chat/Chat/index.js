import React from "react";

import MessageComposer from "../MessageComposer";
import MessageList from "../MessageList";
import Typing from "../Typing";
import styles from "./Chat.scss";

const Chat = () => (
    <div className={styles.Chat}>
        <MessageList />
        <MessageComposer />
        <Typing />
    </div>
);

export default Chat;