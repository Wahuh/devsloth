import React from "react";
import Button from "../../reuse/Button";
import styles from "./TaskCreateButton.scss";
import PlusIcon from "../../reuse/icons/PlusIcon";
import Typography from "../../reuse/Typography";
import Icon from "../../reuse/Icon";

const TaskCreateButton = ({ onClick }) => (
    <Button onClick className={styles.TaskCreateButton}>
        <Typography type="description" color="primary">
            Add Task
        </Typography>
        <Icon size="md">
            <PlusIcon />
        </Icon>
    </Button>
)

export default TaskCreateButton;