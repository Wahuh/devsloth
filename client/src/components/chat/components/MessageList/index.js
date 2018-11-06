import React from "react";
import Message from "../Message";
import List from "../../../reuse/List";
import "./MessageList.scss";

const MessageList = (props) => {
    //let messages = props.messages;
    let messages = [
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
        {icon: "./placeholder-face-big.png", alias: "Alice", time: "10:00AM", text: `hello this is a test messtests is a test message this is a test message
        hello this is a test messtests is a test message this is a test messagehello this is a test messtests is a test message this is a test message`},
    ];

    const messageItems = messages.map(
        message => <Message alias={message.alias} time={message.time}>{message.text}</Message>
    );

    return (
        <List className="MessageList">
            {messageItems}
        </List>
    );
}

export default MessageList;
