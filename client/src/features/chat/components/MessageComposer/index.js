import React, { Component } from "react";
import TextInput from "./TextInput";
import SendButton from "./SendButton";
import "./MessageComposer.scss";

class MessageComposer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            channel: "#Global"
        };
        //this.channel = this.state.currentChannel;
        this.chanel = "Global"
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.placeholder = `Send a message to ` + this.state.channel;
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            message: event.target.value
        });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log("A message was submitted: " + this.state.message + " at " + this.generateTimeStamp());
            this.setState({message: ''});
            //Send message to messageList
        }
    }

    sendMessage() {

    }

    generateTimeStamp() {
        return Date.now();
    }

    render() {
        return (
            <div className="MessageComposer">
                <TextInput placeholder={this.placeholder} value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                <SendButton />
            </div>    
        );
    }
}

export default MessageComposer;