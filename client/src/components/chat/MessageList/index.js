import { connect } from "react-redux";
import { getChannelMessages } from "../duck/selectors";
import { getMemberAlias } from "../../members/duck/selectors";
import dateApi from "../../../api/dateApi";

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
    }

    componentDidMount() {
        document.getElementById("Filler").scrollIntoView({ behavior: "smooth" });
    }

    componentDidUpdate() {
        document.getElementById("Filler").scrollIntoView({ behavior: "smooth" });
    }

    render() {
        const { messages } = this.props;
        
        return (
            <div className={styles.MessageList}>
                <List>
                    {messages && messages.map(
                        message => 
                        <ListItem>
                            <Message message={message} />
                        </ListItem>
                    )}
                    <div id="Filler"></div>
                </List>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const channelMessages = getChannelMessages(state);
    const messages = [];
    let prevMemberId;
    for (let i = 0; i < channelMessages.length; i++) {
        let message = channelMessages[i];
        const { member, text, timestamp, isNotification } = message;
        if (isNotification) {
            messages.push(message);
        } else {
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
    }
    return { messages };
} 
export default connect(mapStateToProps)(MessageList);
