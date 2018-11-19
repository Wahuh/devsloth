import React from "react";
import "./GroupToolTip.scss";

const GroupToolTip = (props) => {
    return (
        <span className="GroupToolTip">
            {props.text}
        </span>
    );
}

export default GroupToolTip;