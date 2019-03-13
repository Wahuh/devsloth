import { connect } from "react-redux";
import { selectGroup } from "../duck/actions";
import { getAllGroupIds } from "../duck/selectors";

import React from "react";
import GroupIcon from "../GroupIcon";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import styles from "./GroupList.scss";
import HomeButton from "../../home/HomeButton";
import GroupItem from "../GroupItem";
import GroupModalButton from "../GroupModalButton";

const GroupList = ({ currentId, groupIds, onSelect, onShowModal,  }) => {
    const groupItems = groupIds.map(
        id => (
            <GroupItem key={id} >
                <GroupIcon _id={id} />
            </GroupItem>
        )
    );

    return (
        <List className={styles.GroupList}>
            <GroupItem>
                <HomeButton />
            </GroupItem>

            {groupItems}

            <GroupItem>
                <GroupModalButton />
            </GroupItem>
        </List>
    );
}

const mapStateToProps = state => ({
    groupIds: getAllGroupIds(state),
});

export default connect(mapStateToProps, {
    onSelect: selectGroup
})(GroupList);