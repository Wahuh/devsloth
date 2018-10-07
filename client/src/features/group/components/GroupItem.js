import React from "react";
import "./GroupItem.scss";

const GroupItem = (props) => {
    return (
        <li className="GroupItem">
            <div className="Circle">
                {props.group}         
            </div>
        </li>
    );
}

export default GroupItem;