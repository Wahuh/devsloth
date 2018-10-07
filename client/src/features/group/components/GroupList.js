import React from "react";
import "./GroupList.scss";
import GroupItem from "./GroupItem";

const GroupList = (props) => {
    //const groups = props.groups;
    let groups = [
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
        {name: "Wahuh"},
    ];
    const groupItems = groups.map(
        (group) => <GroupItem group={group.name} />
    );

    return (
        <ul className="GroupList">
            {groupItems}
        </ul>
    );
}

export default GroupList;