import React from "react";

const Toggle = (props) => {
    return (
        <div onClick={props.onClick}>{props.text}</div>
    );
}

export default Toggle;