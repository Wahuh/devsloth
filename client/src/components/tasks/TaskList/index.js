import { connect } from "react-redux";
import { getTasks } from "../duck/selectors";
import { showTaskModal } from "../duck/actions";

import React from "react";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import Row from "../../reuse/Row";
import Typography from "../../reuse/Typography";
import Button from "../../reuse/Button";
import PlusIcon from "../../reuse/icons/PlusIcon";
import Task from "../Task";
import styles from "./TaskList.scss";

const TaskList = ({ tasks, showTaskModal }) => {
    const taskItems = tasks.map(task => 
        <ListItem className={styles.TaskItem}>
            <Task name={task.name} />
        </ListItem>
    ); 

    return (
        <List className={styles.TaskList}>
            <ListItem className={styles.TaskListTitle}>
                <Row alignItems="center">
                    <Typography marginBottom="0" type="heading">Tasks</Typography>
                    <Button onClick={showTaskModal} className={styles.AddButton}>
                        <PlusIcon />
                    </Button>
                </Row>
            </ListItem>
            <ListItem>
                <Button className={styles.TaskListButton}>
                <Typography type="button">Active</Typography>
                </Button>

                <Button className={styles.TaskListButton}>
                    <Typography type="button">Done</Typography>
                </Button>
            </ListItem>
            {taskItems}
        </List>
    );
}

const mapStateToProps = state => ({
    tasks: getTasks(state)
});

export default connect(mapStateToProps, {
    showTaskModal
})(TaskList);