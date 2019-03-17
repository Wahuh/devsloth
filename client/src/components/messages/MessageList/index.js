import { connect } from "react-redux";
import { getChannelMessages } from "../duck/selectors";
import { getMemberAlias } from "../../members/duck/selectors";
import dateApi from "../../../api/dateApi";

import React, { Component, useRef } from "react";
// import { VariableSizeList as List } from 'react-window';
import List from "../../reuse/List";
import { Scrollbars } from "react-custom-scrollbars";
import Message from "../Message";
import ListItem from "../../reuse/ListItem";
import styles from "./MessageList.scss";
import AutoSizer from "react-virtualized-auto-sizer";

const measure = document.getElementById("measure");
// measure.classList.add(taskStyles.TextMock);
const message = document.getElementById("message");
const PADDING_BOTTOM = 16;
// const MessageList = ({ messages }) => {
//     const listRef = useRef(null);

//     const Row = ({ index, style }) => {
//         <div style={style}>
//             <Message message={messages[index]} />
//         </div>
//     }

//     const getItemSize = index => {
//         message.innerHTML = messages[index].text;
//         const height = message.clientHeight;
//         message.innerHTML = "";
//         return height + 18;
//     }

//     return (
//         <div className={styles.MessageList}>
//             <AutoSizer>
//                 {({ height, width }) => (
//                     <List
//                         ref={listRef}
//                         width={width}
//                         height={height}
//                         itemCount={messages.length}
//                         itemSize={getItemSize}
//                     >
//                         {Row}
//                     </List>
//                 )}
//             </AutoSizer>
//         </div>
//     );
// }

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
