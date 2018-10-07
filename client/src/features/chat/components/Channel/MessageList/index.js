import React from "react";
import Message from "./Message";
import "./MessageList.scss";

const MessageList = (props) => {
    //let messages = props.messages;
    let messages = [
        {text: "hello"},
        {text: "i love poo"},
        {text: "i love wahuh"},
        {text: "i love dongdong"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love sherry"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill"},
        {text: "i love alice"},
        {text: "i love alice dunghill, "},
    ];
    const messageItems = messages.map(
        (message) => <Message text={message.text} />
    );

    return (
        <div className="MessageList">
            {messageItems}
        </div>
    );
}

export default MessageList;
