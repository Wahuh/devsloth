import { connect } from "react-redux";

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import TextArea from "../../reuse/AutoTextArea";
import styles from "./TaskRenameForm.scss";
import { getSelectedTask } from "../duck/selectors";
import { updateTaskRequest } from "../duck/actions";

const TaskRenameForm = ({ task, onEdit }) => {
    const [ name, setName ] = useState("");
    useEffect(() => {
        if (task) {
            setName(task.name);
        }
    }, [ task ])

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        setName(value);
    }

    const handleSubmit = () => {
        if (name && name !== task.name) {
            onEdit({ name, _id: task._id });
        }
    }

    return task ? (
        <form
            autoComplete="off"
            autoFocus
            className={classNames(styles.TaskRenameForm)}
        >
            <TextArea
                onChange={handleChange}
                className={styles.TaskRenameInput}
                value={name}
                autoFocus
                onEnter={handleSubmit}
                onBlur={handleSubmit}
            />
        </form>
    ) : null;
};

export default connect(null, {
    onEdit: updateTaskRequest
})(TaskRenameForm);