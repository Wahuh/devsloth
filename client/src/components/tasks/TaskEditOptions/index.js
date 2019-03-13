import React from "react";
import AddMemberIcon from "../../reuse/icons/AddMemberIcon";
import AddChecklistIcon from "../../reuse/icons/AddChecklistIcon";
import Button from "../../reuse/Button";
import DeadlineIcon from "../../reuse/icons/DeadlineIcon";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import Typography from "../../reuse/Typography";
import styles from "./TaskEditOptions.scss";
import Row from "../../reuse/Row";

const TaskEditOptions = ({ onAddChecklist }) => (
    <section className={styles.TaskEditOptions}>
        <Button type="button" theme="icon">
            <AddMemberIcon />
        </Button>

        <Button type="button" onClick={onAddChecklist} theme="icon">
            <AddChecklistIcon />
        </Button>

        <Button type="button" theme="icon">
            <DeadlineIcon />
        </Button>
    </section>
);

export default TaskEditOptions;