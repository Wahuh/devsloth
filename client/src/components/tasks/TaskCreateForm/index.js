import { connect } from "react-redux";

import React, { useState } from "react";
import classNames from "classnames";
import PlusIcon from "../../reuse/icons/PlusIcon";
import styles from "./TaskCreateForm.scss";
import Input from "../../reuse/Input";
import { createTaskRequest } from "../duck/actions";
import { getLastTaskId } from "../../lists/duck/selectors";

const TaskCreateForm = ({ lastTaskId, onCreate, listId, channelId }) => {
    const [ name, setName ] = useState("");
    const [ isFocused, setIsFocused ] = useState(false);
    const handleFocus = () => {
        setIsFocused(!isFocused);
    }

    const handleSubmit = event => {
        if (name) {
            onCreate({
                name: name,
                list: listId,
                prev: lastTaskId || null,
                channel: channelId || null
            });
            setName("");
        }
    }

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        setName(value);
    }

    return (
        <form
            autoComplete="off"
            className={classNames(
            styles.TaskCreateForm,
            { [styles.isFocused]: isFocused }
        )}>
            <PlusIcon />

            <Input
                onEnter={handleSubmit}
                className={styles.TaskCreateInput}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleFocus}
                value={name}
                name="name"
                type="text"
                placeholder="add task"
            />
        </form>
    );
}

const mapStateToProps = (state, ownProps) => ({
    lastTaskId: getLastTaskId(state, ownProps)
})

export default connect(mapStateToProps, {
    onCreate: createTaskRequest
})(TaskCreateForm);