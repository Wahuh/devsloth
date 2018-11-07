import React from "react";
import "./TaskMenu.scss";
import TaskList from "../TaskList";

const TaskMenu = () => {
    return (
        <div className="TaskMenu">
            <TaskList />
        </div>
    );
}

export default TaskMenu;