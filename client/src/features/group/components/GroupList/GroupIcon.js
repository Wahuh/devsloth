import React from "react";
import GroupToolTip from "../GroupToolTip";
import "./GroupIcon.scss"

const GroupIcon = (props) => {
    console.log(props.onClick, "icon")
    return (
        <div className="Circle GroupIcon" onClick={props.onClick}>
            <GroupToolTip text="poop" />
            {props.group}         
        </div>
    );
}

export default GroupIcon;