import React from "react";

const IconTextButton = (props) => {
    return (
        <div className={props.style}>
            <img src={props.icon} />
        </div>
    );
}

export default IconTextButton;