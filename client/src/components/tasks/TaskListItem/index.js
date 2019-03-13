import React from "react";
import ListItem from "../../reuse/ListItem";
import Typography from "../../reuse/Typography";
import styles from "./TaskListItem.scss"

const TaskListItem = ({ name }) => (
    <ListItem className={styles.TaskListItem}>
        <Typography color="primary">
            {name}
        </Typography>
    </ListItem>
);

export default TaskListItem;