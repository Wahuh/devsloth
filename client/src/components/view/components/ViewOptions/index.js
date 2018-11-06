import React, { Component } from "react";
import Button from "../../../reuse/Button";
import Typography from "../../../reuse/Typography";
import { func } from "prop-types";
import "./ViewOptions.scss";

class ViewOptions extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            isChatActive: true,
            isTasksActive: false,
        }
        this.toggleChatActive = this.toggleChatActive.bind(this);
        this.toggleTasksActive = this.toggleTasksActive.bind(this);
    }

    toggleChatActive() {
        if (!this.state.isChatActive) {
            this.setState({
                ...this.state,
                isChatActive: true,
                isTasksActive: false,
            })
            this.props.toggleChat();
        }
    }

    toggleTasksActive() {
        if (!this.state.isTasksActive) {
            this.setState({
                ...this.state,
                isChatActive: false,
                isTasksActive: true
            })
            this.props.toggleTasks();
        }
    }

    render() {
        return (
            <div className="ViewOptions">
                <Button className={this.state.isChatActive? "ToggleChatActive" : "ToggleChat"} onClick={this.toggleChatActive}>
                    <Typography>Chat</Typography>
                </Button>
                <Button className={this.state.isTasksActive? "ToggleTasksActive" : "ToggleTasks"} onClick={this.toggleTasksActive}>
                    <Typography>Tasks</Typography>
                </Button>
            </div>
        );
    }
}

ViewOptions.propTypes = {
    toggleChat: func.isRequired,
    toggleTasks: func.isRequired,
}

export default ViewOptions;