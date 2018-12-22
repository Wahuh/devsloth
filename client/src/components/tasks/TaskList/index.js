import { connect } from "react-redux";
import { getAllTasks } from "../duck/selectors";
import { showUiModal } from "../../ui/duck/actions";

import React from "react";
import AddButton from "../../reuse/buttons/AddButton";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import Row from "../../reuse/Row";
import Typography from "../../reuse/Typography";
import Button from "../../reuse/Button";
import PlusIcon from "../../reuse/icons/PlusIcon";
import Task from "../Task";
import styles from "./TaskList.scss";

const TaskList = ({ tasks, onShowModal }) => {
    const taskItems = tasks.map(task => 
        <ListItem className={styles.TaskItem}>
            <Task name={task.name} />
        </ListItem>
    ); 

    return (
        <List className={styles.TaskList}>
            <ListItem className={styles.TaskHeading}>
                <Row alignItems="center">
                    <Typography color="tertiary" type="heading">Tasks</Typography>
                    <AddButton onClick={onShowModal} className={styles.AddButton} />
                </Row>
            </ListItem>
            <ListItem>
                <Row>
                    <Button theme="outlined" className={styles.TaskListButton}>
                    <Typography color="tertiary" type="button">Active</Typography>
                    </Button>

                    <Button theme="outlined" className={styles.TaskListButton}>
                        <Typography color="tertiary" type="button">Done</Typography>
                    </Button>
                </Row>
            </ListItem>
            {taskItems}
        </List>
    );
}

const mapStateToProps = state => ({
    tasks: getAllTasks(state)
});

export default connect(mapStateToProps, {
    onShowModal: () => showUiModal("TASK")
})(TaskList);