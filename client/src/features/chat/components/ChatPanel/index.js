import React from "react";
import MessageComposer from "../MessageComposer";
import Channel from "../Channel";
import "./ChatPanel.scss";

const ChatPanel = (props) => {
    return (
        <div className="ChatPanel">
            <Channel />
            <MessageComposer />
        </div>
    );
}

export default ChatPanel;