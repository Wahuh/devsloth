import React from "react";
import Toggle from "../../../../pureComponents/Toggle";
import "./DisplayOptions.scss";

const DisplayOptions = (props) => {
    return (
        <div className="DisplayOptions">
            <Toggle onClick={props.toggleChat} text="Chat" />
            <Toggle onClick={(props.toggleTasks)} text="Tasks" />
        </div>
    );
}

export default DisplayOptions;