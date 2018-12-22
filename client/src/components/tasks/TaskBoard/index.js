import React from "react";
import BoardName from "../BoardName";
import TaskList from "../TaskList";
import Button from "../../reuse/Button";
import Row from "../../reuse/Row";
import styles from "./TaskBoard.scss";

const TaskBoard = () => (
    <div className={styles.TaskBoard}>
        <Row alignItems="center" className={styles.BoardHeader}>
            <BoardName name="Untitled Board" />
            <Button rounded text="Add List" theme="action" />
        </Row>
        
        <Row>

        </Row>
    </div>
)

export default TaskBoard;