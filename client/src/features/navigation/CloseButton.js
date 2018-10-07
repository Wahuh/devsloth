import React from "react";
import "./CloseButton.scss"

const CloseButton = (props) => {
    return (
        <a href="javascript:void(0)" className="CloseButton" onClick={props.onClick}>&times;</a>
    );
}

export default CloseButton;

