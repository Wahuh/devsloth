import { connect } from "react-redux";
import { getChannelMessages } from "../duck/selectors";
import { getMemberAlias } from "../../members/duck/selectors";
import dateApi from "../../../api/dateApi";

import React from "react";
import styles from "./MessageList.scss";
import AutoSizer from "react-virtualized-auto-sizer";
import InnerMesageList from "./InnerMessageList";

const messageList = document.getElementById("MessageList");

const MessageList = ({ messages }) => {
    return (
        <div className={styles.MessageList}>
            <AutoSizer>
                {({ height, width }) => (
                    <InnerMesageList 
                        messages={messages}
                        height={height}
                        width={width}
                    />
                )}
            </AutoSizer>
        </div>
    );
}

const mapStateToProps = state => {
    const channelMessages = getChannelMessages(state);
    console.log(channelMessages);

    const messages = [];
    let prevMemberId;
    for (let i = 0; i < channelMessages.length; i++) {
        let message = channelMessages[i];
        const { member, text, timestamp, isNotification } = message;
        if (member === prevMemberId) {
            messages[messages.length - 1].text += `\n${text}`;
        } else {
            messages.push({ 
                ...message,
                timestamp: dateApi.toDate(timestamp), 
                alias: getMemberAlias(state, member) 
            });
            prevMemberId = member;
        }
    }
    return { messages };
} 

export default connect(mapStateToProps)(MessageList);
