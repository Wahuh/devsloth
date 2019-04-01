import { connect } from "react-redux";
import { getSelectedChannelId, getSelectedChannelName } from "../../channel/duck/selectors";
import { getMemberIdUser } from "../../members/duck/selectors";
import { getSelectedGroupName } from "../../group/duck/selectors";

import React, { useState } from "react";
import TextArea from "../../reuse/TextArea";
import styles from "./MessageComposer.scss";
import { sendMessage, sendStartTypingMessage } from "../../messages/duck/actions";
import { memberStartTyping } from "../../members/duck/actions";

const MessageComposer = ({ channelId, memberId, onType, onSend, channelName, groupName }) => {
    const [ message, setMessage ] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        const { value } = input;
        setMessage(value);
    }

    const handleTyping = () => {
        if (message) {
            onType({ memberId, channelId });
        }
    }

    const handleSubmit = () => {
        if (message.trim().length > 0) {
            onSend({
                text: message,
                channel: channelId,
                member: memberId,
            });
            resetMessage();
        }
    }

    const resetMessage = () => {
        setMessage("");
    }

    return (
        <div className={styles.MessageComposer}>
            <TextArea
            name={styles.MessageInput}
            placeholder={`Message #${channelName} in ${groupName}`}
            onEnter={handleSubmit}
            onChange={handleChange}
            onKeyUp={handleTyping}
            value={message} 
            className={styles.MessageInput}
            onKeyPress={handleTyping}
            autoFocus
            maxRows={5}
            minRows={1}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    channelName: getSelectedChannelName(state),
    channelId: getSelectedChannelId(state),
    memberId: getMemberIdUser(state),
    groupName: getSelectedGroupName(state)
});

export default connect(mapStateToProps, {
    onSend: sendMessage,
    onType: memberStartTyping,
})(MessageComposer);