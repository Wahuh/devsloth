import { connect } from "react-redux";
import { getSelectedChannelId, getSelectedChannelName } from "../../channel/duck/selectors";
import { getCurrentMemberId, getMemberIdUser } from "../../members/duck/selectors";
import { getCurrentGroupName, getSelectedGroupName } from "../../group/duck/selectors";

import React, { Component } from "react";
import TextArea from "../../reuse/TextArea";
import styles from "./MessageComposer.scss";
import { sendMessage, sendStartTypingMessage } from "../../messages/duck/actions";

class MessageComposer extends Component {
    state = {
        message: "",
    };

    rows = 1;
    prevWidth = 0;
    rowWidths = [];

    handleChange = ({ currentTarget: input }) => {
        const { value } = input;
        this.setState({ message: input.value });
    }

    handleTyping = () => {
        const { memberId } = this.props;
        this.props.onType(memberId);
    }

    handleSubmit = () => {
        if (this.state.message.trim().length > 0) {
            const { channelId, memberId } = this.props;
            this.props.onSend({
                text: this.state.message,
                channel: channelId,
                member: memberId,
            });
            this.resetMessage();
        }
    }

    resetMessage = () => {
        this.setState({ message: "" })
    }

    render() {
        const { channelName, groupName } = this.props;
        const { rows } = this.state;
        return (
            <div className={styles.MessageComposer}>
                <TextArea
                name={styles.MessageInput}
                placeholder={`Message #${channelName} in ${groupName}`}
                onEnter={this.handleSubmit}
                onChange={this.handleChange}
                onKeyUp={this.handleTyping}
                value={this.state.message} 
                className={styles.MessageInput}
                onKeyPress={this.handleTyping}
                autoFocus
                maxRows={5}
                minRows={1}
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
    channelName: getSelectedChannelName(state),
    channelId: getSelectedChannelId(state),
    memberId: getMemberIdUser(state),
    groupName: getSelectedGroupName(state)
});

export default connect(mapStateToProps, {
    onSend: sendMessage,
    onType: sendStartTypingMessage,
})(MessageComposer);