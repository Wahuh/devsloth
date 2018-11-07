import React from "react";
import List from "../../../reuse/List";
import ListItem from "../../../reuse/ListItem";
import Typography from "../../../reuse/Typography";
import Button from "../../../reuse/Button";
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
            <ListItem className="TaskListTitle"><Typography type="subtitle2">Tasks</Typography></ListItem>
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

