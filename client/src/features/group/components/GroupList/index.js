import React from "react";
import "./GroupList.scss";
import GroupItem from "./GroupItem";
import AddGroupButton from "../AddGroupButton";

const GroupList = (props) => {
    const groups = props.groups;
    const groupItems = groups.map(
        (group) => <GroupItem group={group.name} onSelect={props.onSelect}/>
    );

    return (
        <ul className="GroupList">
            {groupItems}
            <GroupItem>
                <AddGroupButton onClick={props.show} />
            </GroupItem>
        </ul>
    );
}

export default GroupList;