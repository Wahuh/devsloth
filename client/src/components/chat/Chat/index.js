import React from "react";

import Column from "../../reuse/Column";
import MessageComposer from "../MessageComposer";
import MessageList from "../MessageList";
import styles from "./Chat.scss";

const Chat = () => (
    <Column height="100%" width="100%">
        <MessageList />
        <MessageComposer />
    </Column>
);

export default Chat;