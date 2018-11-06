import React from "react";
import "./GroupList.scss";
import List from "../../../reuse/List";
import ListItem from "../../../reuse/ListItem";
import Button from "../../../reuse/Button"
import PlusIcon from "../../../reuse/icons/PlusIcon";

const GroupList = ({ groups, onSelect, show }) => {
    const groupItems = groups.map(
        (group) => <ListItem className="GroupItem">{group.name}</ListItem>
    );

    return (
        <List className="GroupList">
            {groupItems}
            <ListItem className="GroupItem">
                <Button className="AddGroupButton" onClick={show}>
                    <PlusIcon />
                </Button>
            </ListItem>
        </List>
    );
}

export default GroupList;