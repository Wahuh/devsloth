import React, { Component } from "react";
import Input from "../../reuse/Input";
import Button from "../../reuse/Button";
import Row from "../../reuse/Row";
import styles from "./MessageComposer.scss";

class MessageComposer extends Component {
    state = {
        message: '',
        channel: "#Global"
    };
    channel = "Global";

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            message: event.target.value
        });
    }

    logMessage = () => {
        console.log("A message was submitted: " + this.state.message + " at " + this.generateTimeStamp());
        this.setState({message: ''});
        //Send message to messageList
    }

    sendMessage() {

    }

    generateTimeStamp = () => {
        return Date.now();
    }

    render() {
        return (
            <div className={styles.MessageComposer}>
                <Input 
                placeholder={`Send a message to ${this.state.channel}`}
                onEnter={this.logMessage}
                onChange={this.handleChange}
                value={this.state.message} 
                className={styles.MessageComposerInput}
                />
                <Button text="Send" className={styles.MessageComposerButton} />
            </div>    
        );
    }
}

export default MessageComposer;