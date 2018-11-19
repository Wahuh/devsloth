import React from "react";
import BoardName from "../BoardName";
import Button from "../../reuse/Button";
import Row from "../../reuse/Row";
import styles from "./TaskBoard.scss";

const TaskBoard = () => (
    <div className={styles.TaskBoard}>
        <Row>
            <BoardName name="Untitled Board" />
            <Button text="Add List" theme="action" />
        </Row>

    </div>
)

export default TaskBoard;