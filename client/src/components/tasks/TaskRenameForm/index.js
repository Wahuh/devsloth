import { connect } from "react-redux";

import React from "react";
import classNames from "classnames";
import Input from "../../reuse/Input";
import styles from "./TaskRenameForm.scss";

const TaskRenameForm = () => {
    return (
        <form
        autoComplete="off"
        autoFocus
        className={classNames(styles.TaskRenameForm)}
        >
            <Input 
                className={styles.TaskRenameInput}
                value={"boobs"}
            />
        </form>
    );
};

export default connect()(TaskRenameForm);
    // { [styles.isFocused]: isFocused }