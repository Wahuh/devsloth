import React from "react";
import "./Message.scss";

const Message = (props) => {
    return (
        <div className="Message">
            {props.text}
        </div>
    );
}

export default Message;

//control size of text and wrap onto next line