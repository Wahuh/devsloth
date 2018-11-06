import React from "react";
import MessageComposer from "../MessageComposer";
import MessageList from "../MessageList";
import "./Chat.scss";

const Chat = ({}) => {
    return (
        <div className="Chat">
            <MessageList />
            <MessageComposer />
        </div>
    );
}

export default Chat;