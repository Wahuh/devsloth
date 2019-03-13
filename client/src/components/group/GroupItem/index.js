import React from "react";
import ListItem from "../../reuse/ListItem";
import styles from "./GroupItem.scss";

const GroupItem = ({ children }) => (
    <ListItem className={styles.GroupItem}>
        {children}
    </ListItem>
)

export default GroupItem;