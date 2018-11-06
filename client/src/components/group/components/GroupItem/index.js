import React from "react";
import "./GroupItem.scss";
import GroupIcon from "../GroupList/GroupIcon";


const GroupItem = (props) => {
    if (props.group) {
        return (
            <li className="GroupItem">
                <GroupIcon group={props.group} onClick={props.onSelect}/>
            </li>
        );
    } else {
        return (
            <li className="GroupItem">
                {props.children}
            </li>
        );
    }
}

export default GroupItem;