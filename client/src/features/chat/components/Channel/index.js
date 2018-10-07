import React, { Component } from "react";
import MessageList from "./MessageList";

class Channel extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <MessageList />
        );
    }
}

export default Channel;