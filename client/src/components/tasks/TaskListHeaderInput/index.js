import React from "react";
import Input from "../../reuse/Input";
import Button from "../../reuse/Button";
import CloseIcon from "../../reuse/icons/CloseIcon";
import styles from "./TaskListHeaderInput.scss";

const TaskListHeaderInput = ({ name, onChange, onEnter, onCancel, value, onBlur }) => {
    return (
        <div className={styles.TaskListHeaderInput}>
            <Input
                autoFocus
                className={styles.Input}
                type="text"
                value={value}
                onBlur={onBlur}
                onEnter={onEnter}
                onChange={onChange}
                name={name}
            />
            <Button onClick={onCancel} className={styles.Button} theme="icon">
                <CloseIcon />
            </Button>
        </div>
    );
}

export default TaskListHeaderInput;