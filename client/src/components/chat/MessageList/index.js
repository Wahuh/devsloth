import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import Message from "../Message";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import styles from "./MessageList.scss";

class MessageList extends Component {
    //let messages = props.messages;
    constructor(props) {
        super(props);
        this.scrollbars = React.createRef();
    }

    componentDidMount() {
        this.scrollbars.current.scrollToBottom();
    }

    render() {
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
            message => 
            <ListItem>
                <Message alias={message.alias} time={message.time}>{message.text}</Message>
            </ListItem>
        );
        
        return (
            <Scrollbars ref={this.scrollbars} style={{height: "100%"}}>
                <List className={styles.MessageList}>
                    {messageItems}
                </List>
            </Scrollbars>
        );
    }
}

export default MessageList;
