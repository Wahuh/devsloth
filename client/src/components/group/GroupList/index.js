import { connect } from "react-redux";
import { showUiModal } from "../../ui/duck/actions";
import { selectGroup } from "../duck/actions";
import { getAllGroups, getCurrentGroupId } from "../duck/selectors";

import React from "react";
import GroupIcon from "../GroupIcon";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import Button from "../../reuse/Button"
import PlusIcon from "../../reuse/icons/PlusIcon";
import styles from "./GroupList.scss";

const GroupList = ({ groups, onSelect, onShowModal, currentGroup }) => {
    const groupItems = groups.map( ({ _id, name }) => {
        return <ListItem 
            key={_id} 
            className={currentGroup === _id ? styles.GroupItemSelected : styles.GroupItem}>
            <GroupIcon onClick={() => onSelect({ _id })} text={name} />
        </ListItem>
    });

    return (
        <List className={styles.GroupList}>
            {groupItems}
            <ListItem className={styles.GroupItem}>
                <Button theme="action" className={styles.AddGroupButton} onClick={onShowModal}>
                    <PlusIcon />
                </Button>
            </ListItem>
        </List>
    );
}

const mapStateToProps = state => ({
    groups: getAllGroups(state),
    currentGroup: getCurrentGroupId(state)
});

export default connect(mapStateToProps, {
    onShowModal: () => showUiModal("GROUP"),
    onSelect: selectGroup
})(GroupList);