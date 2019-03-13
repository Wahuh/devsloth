import { connect } from "react-redux";
import React from "react";
import TaskListHeader from "../TaskListHeader";
import TaskList from "../TaskList";
import styles from "./TaskBoardList.scss";

const TaskBoardList = ({ children }) => (
    <span className={styles.TaskBoardList}>
        {children}
    </span>
)

export default TaskBoardList;