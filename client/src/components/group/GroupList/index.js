import { connect } from "react-redux";
import { showGroupModal } from "../duck/actions";
import { getAllGroups } from "../duck/selectors";

import React from "react";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import Button from "../../reuse/Button"
import PlusIcon from "../../reuse/icons/PlusIcon";
import styles from "./GroupList.scss";

const GroupList = ({ groups, onSelect, showGroupModal }) => {
    const groupItems = groups.map(
        (group) => <ListItem className={styles.GroupItem}>{group.name}</ListItem>
    );

    return (
        <List className={styles.GroupList}>
            {groupItems}
            <ListItem className={styles.GroupItem}>
                <Button className={styles.AddGroupButton} onClick={showGroupModal}>
                    <PlusIcon />
                </Button>
            </ListItem>
        </List>
    );
}


function selectGroup(event) {
    event.stopPropagation();
    console.log("groupSelected");
}

const mapStateToProps = state => ({
    groups: getAllGroups(state)
});

export default connect(mapStateToProps, {
    showGroupModal
})(GroupList);