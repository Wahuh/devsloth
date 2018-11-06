import React, { Component } from "react";
import Input from "../../../reuse/Input";
import Button from "../../../reuse/Button";
import Typography from "../../../reuse/Typography";
import Row from "../../../reuse/Row";
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
        this.handleChange = this.handleChange.bind(this);
        this.logMessage = this.logMessage.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            message: event.target.value
        });
    }

    logMessage() {
        console.log("A message was submitted: " + this.state.message + " at " + this.generateTimeStamp());
        this.setState({message: ''});
        //Send message to messageList
    }

    sendMessage() {

    }

    generateTimeStamp() {
        return Date.now();
    }

    render() {
        return (
            <div className="MessageComposer">
                <Row width="100%">
                    <Input 
                    placeholder={`Send a message to ${this.state.channel}`}
                    onEnter={this.logMessage}
                    onChange={this.handleChange}
                    value={this.state.message} 
                    className="MessageComposerInput"
                    />
                    <Button className="MessageComposerButton">
                        <Typography type="body">
                            Send
                        </Typography>
                    </Button>
                </Row>
            </div>    
        );
    }
}

export default MessageComposer;