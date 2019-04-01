import React from "react";
import classNames from "classnames";
import styles from "./TaskSearchForm.scss";

const TaskSearchForm = () => {
    <form 
        autoComplete="off"
        autoFocus
        className={classNames(styles.TaskSearchForm)}
    >
        <TextArea
            onChange={handleChange}
            className={styles.TaskSearchInput}
            value={name}
            autoFocus
            onEnter={handleSubmit}
            onBlur={handleSubmit}
        />
    </form>
}

export default TaskSearchForm;