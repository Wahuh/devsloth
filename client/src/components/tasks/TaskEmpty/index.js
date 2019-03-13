import { connect } from "react-redux";

import React, { Fragment } from "react";
import TextArea from "../../reuse/TextArea";
import styles from "./TaskEmpty.scss";
import { createTaskRequest, deleteLocalTask } from "../duck/actions";
import DeleteButton from "../../reuse/buttons/DeleteButton";

const TaskEmpty = ({ onCreate, onDelete, task }) => (
    <Fragment>
        <TextArea 
            className={styles.TaskEmpty}
            minRows={1}
            type="text"
            autoFocus
            placeholder="Enter a task name"
            onBlur={
                ({ currentTarget: input }) => {
                    if (input.value.length > 0) {
                        onCreate({ ...task, name: input.value, unsaved: false });
                    }
                }
            }
        />
        {task.unsaved && <DeleteButton onClick={() => onDelete(task)} />} 
    </Fragment>
);

export default connect(null, {
    onCreate: createTaskRequest,
    onDelete: deleteLocalTask
})(TaskEmpty);