import { connect } from "react-redux";
import { showGroupModal } from "../duck/actions";
import { getAllGroups } from "../duck/selectors";

import React from "react";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import Button from "../../reuse/Button"
import PlusIcon from "../../reuse/icons/PlusIcon";
import styles from "./GroupList.scss";

const GroupList = ({ groups, onSelect, show }) => {
    const groupItems = groups.map(
        (group) => <ListItem className={styles.GroupItem}>{group.name}</ListItem>
    );

    return (
        <List className={styles.GroupList}>
            {groupItems}
            <ListItem className={styles.GroupItem}>
                <Button className={styles.AddGroupButton} onClick={show}>
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

const mapDispatchToProps = (dispatch) => ({
    show() {
        //action
        dispatch(showGroupModal());
    },
    onSelect: selectGroup,
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);