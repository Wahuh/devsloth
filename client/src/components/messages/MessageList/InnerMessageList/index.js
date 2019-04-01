import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { VariableSizeList as List } from 'react-window';
import Message from "../../Message";
import styles from "../../Message/Message.scss";
import listStyles from "./InnerMessageList.scss";
// measure.classList.add(taskStyles.TextMock);
const message = document.getElementById("Message");
message.className = styles.Message;
const messageText = document.getElementById("MessageText");
const measure2 = document.getElementById("measure2");
const PADDING_BOTTOM = 16;
const MESSAGE_HEIGHT = 48;
const MESSAGE_BODY_PADDING_LEFT = 16;
const MESSAGE_PADDING_X = 48;
const MESSAGE_ICON_WIDTH = 40;
const EXTRA_WIDTH = MESSAGE_PADDING_X + MESSAGE_ICON_WIDTH + MESSAGE_BODY_PADDING_LEFT;


function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

const InnerMesageList = ({ messages, height, width }) => {
    const listRef = useRef(null);
    const prevMessages = usePrevious(messages);
    useEffect(() => {
        message.style.width = `${width}px`;
    }, [ width ]);

    useEffect(() => {
        //compare prevlength to previous array and clear cache
        if (messages && prevMessages) {
            if (messages.length != prevMessages.length) {
                listRef.current.resetAfterIndex(0);
                if (messages.length > 0) {
                    listRef.current.scrollToItem(messages.length - 1);
                }
            } else {
                if (!arraysEqual(messages, prevMessages)) {
                    listRef.current.resetAfterIndex(0);
                }
            }
        }
    }, [ messages ]);

    // useEffect(() => {

    // }, [messages])

    const getItemSize = index => {
        const { text, alias, timestamp } = messages[index];
        messageText.innerHTML = text;
        console.log("text", text);
        const height = messageText.clientHeight + 24 + 16;
        console.log(messageText.clientHeight);
        messageText.innerHTML = "";
        console.log(height, "HEIGHT");
        return height;
    }

    const Row = ({ index, style }) => (
        <div style={style}>
            <Message message={messages[index]} />
        </div>
    )

    return (
        <List
            height={height}
            width={width}
            itemCount={messages.length}
            ref={listRef}
            itemSize={getItemSize}
            className={listStyles.List}
        >
            {Row}
        </List>
    );
}

export default InnerMesageList;