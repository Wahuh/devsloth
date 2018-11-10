import React from "react";
import List from "../../../reuse/List";
import ListItem from "../../../reuse/ListItem";
import Row from "../../../reuse/Row";
import Typography from "../../../reuse/Typography";
import Button from "../../../reuse/Button";
import PlusIcon from "../../../reuse/icons/PlusIcon";
import "./TaskList.scss";

const TaskList = ({task}) => {
    let tasks = [
        {name: "Website Redesign"},
        {name: "Ship iOS app"},
        {name: "Analytics Data"},
        {name: "Increase conversion rate by 20% by Q3"},
        {name: "develop engineering blog"},
    ];
    const taskItems = tasks.map(task => 
        <ListItem className="TaskItem">
            <Typography>
                {task.name}
            </Typography>
        </ListItem>
    ) 

    return (
        <List className="TaskList">
            <ListItem className="TaskListTitle">
                <Row alignItems="center">
                    <Typography type="subtitle2">Tasks</Typography>
                    <Button className="AddButton">
                        <PlusIcon />
                    </Button>
                </Row>
            </ListItem>
            <ListItem className="TaskListButtons">
                <Button className="TaskListButton">
                    <Typography type="body2">Active</Typography>
                </Button>

                <Button className="TaskListButton">
                    <Typography type="body2">Done</Typography>
                </Button>
            </ListItem>
            {taskItems}
        </List>
    );
}

export default TaskList;

