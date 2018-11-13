import React from "react";
import List from "../../../reuse/List";
import ListItem from "../../../reuse/ListItem";
import Row from "../../../reuse/Row";
import Typography from "../../../reuse/Typography";
import Button from "../../../reuse/Button";
import PlusIcon from "../../../reuse/icons/PlusIcon";
import styles from "./TaskList.scss";

const TaskList = ({task}) => {
    let tasks = [
        {name: "Website Redesign"},
        {name: "Ship iOS app"},
        {name: "Analytics Data"},
        {name: "Increase conversion rate by 20% by Q3"},
        {name: "develop engineering blog"},
    ];
    const taskItems = tasks.map(task => 
        <ListItem className={styles.TaskItem}>
            <Typography>
                {task.name}
            </Typography>
        </ListItem>
    ) 

    return (
        <List className={styles.TaskList}>
            <ListItem className={styles.TaskListTitle}>
                <Row alignItems="center">
                    <Typography marginBottom="0" type="heading">Tasks</Typography>
                    <Button className={styles.AddButton}>
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

export default TaskList;

