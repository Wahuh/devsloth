import { connect } from "react-redux";
import { getChannelMessages } from "../duck/selectors";
import { getMemberAlias } from "../../members/duck/selectors";

import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import dateApi from "../../../api/dateApi";
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
            <List id="MessageList" className={styles.MessageList}>
                {messages && messages.map(
                    ({ alias, timestamp, text }) => 
                    <ListItem>
                        <Message alias={alias} timestamp={dateApi.toDate(timestamp)} text={text} />
                    </ListItem>
                )}
                <div id="Filler"></div>
            </List>
        );
    }
}

const mapStateToProps = state => {
    const unaliasedMessages = getChannelMessages(state);
    const messages = unaliasedMessages.map(message => 
        ({ ...message, alias: getMemberAlias(state, message.user) }));
    return { messages };
} 
export default connect(mapStateToProps)(MessageList);
