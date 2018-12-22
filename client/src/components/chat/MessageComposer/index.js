import { connect } from "react-redux";
import { getCurrentChannelName, getCurrentChannelId } from "../../channel/duck/selectors";
import { sendChatMessageRequest, requestChatTyping } from "../../chat/duck/actions";
import { getId } from "../../auth/duck/selectors";

import React, { Component } from "react";
import TextArea from "../../reuse/TextArea";
import Button from "../../reuse/Button";
import SendIcon from "../../reuse/icons/SendIcon";
import styles from "./MessageComposer.scss";

class MessageComposer extends Component {
    state = {
        message: "",
        rows: 1,
    };

    rows = 1;
    prevWidth = 0;
    rowWidths = [];

    handleChange = (event) => {
        const rows = this.calcTextAreaRows();
        this.setState({ rows, message: event.target.value });
    }

    handleTyping = (event) => {
        const { currentUserId } = this.props;
        this.props.onType(currentUserId);
    }

    calcTextAreaRows = () => {
        if (this.rows == 5) {
            return this.rows;
        } 

        let hidden = document.getElementById(styles.HiddenMessage);
        hidden.innerHTML = event.target.value;
        const textArea = document.getElementById(styles.MessageInput);

        const rowWidth = hidden.getBoundingClientRect().width;
        const textAreaWidth = textArea.getBoundingClientRect().width;
        const padding = parseFloat(window.getComputedStyle(textArea, null).getPropertyValue("padding-left"));
        const border = parseFloat(window.getComputedStyle(textArea, null).getPropertyValue("border-left"));
        const textWidth = textAreaWidth - (padding * 2) - (border * 2);
        

        this.widthThreshold = textWidth;

        if (this.rowWidths.length < 1 && rowWidth > textWidth) {
            this.rowWidths.push(this.prevWidth);
            this.rows += 1;
            console.log("rowWidths", this.rowWidths);
        } 

        let result = 0;
        for (let i = 0; i < this.rowWidths.length; i++) {
            result += this.rowWidths[i];
        }

        console.log("result", result);
        const currentRowWidth = rowWidth - result;
        console.log(rowWidth - result);
        //add another row if true
        if (currentRowWidth > textWidth) {
            const width = this.prevWidth - result;
            this.rowWidths.push(width);
            this.rows += 1;
            console.log("w", width);
            console.log("prevWidth", this.prevWidth)
        } 

        this.prevWidth = rowWidth;
        return this.rows;
    }

    handleSubmit = () => {
        if (this.state.message.trim().length > 0) {
            const { currentChannelId, currentUserId } = this.props;
            console.log("currentuserID", currentUserId);
            this.props.onSend({
                text: this.state.message,
                channel: currentChannelId,
                user: currentUserId,
            });
            this.resetMessage();
        }
    }

    resetMessage = () => {
        this.setState({ message: "" })
    }

    render() {
        const { currentChannelName } = this.props;
        const { rows } = this.state;
        return (
            <div className={styles.MessageComposer}>
                <TextArea
                name={styles.MessageInput}
                placeholder={`Message #${currentChannelName}`}
                onEnter={this.handleSubmit}
                onChange={this.handleChange}
                value={this.state.message} 
                className={styles.MessageInput}
                onKeyPress={this.handleTyping}
                autoFocus
                rows={rows}
                />
                {/* <Button onClick={this.handleSubmit} className={styles.SendButton}>
                    <SendIcon />
                </Button> */}
                <div id={styles.HiddenMessage}></div> 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentChannelName: getCurrentChannelName(state),
    currentChannelId: getCurrentChannelId(state),
    currentUserId: getId(state),
});

export default connect(mapStateToProps, {
    onSend: sendChatMessageRequest,
    onType: requestChatTyping,
})(MessageComposer);