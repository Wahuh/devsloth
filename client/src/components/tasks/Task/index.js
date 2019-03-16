import { connect } from "react-redux";
import { addUiModal } from "../../ui/duck/actions";

import React, { useState, useRef } from "react";
import { NavLink, withRouter } from "react-router-dom";
import BulletListIcon from "../../reuse/icons/BulletListIcon";
import Button from "../../reuse/Button";
import ChatBubbleIcon from "../../reuse/icons/ChatBubbleIcon";
import DeleteButton from "../../reuse/buttons/DeleteButton";
import EditIcon from "../../reuse/icons/EditIcon";
import Row from "../../reuse/Row";
import TextArea from "../../reuse/TextArea";
import Typography from "../../reuse/Typography";
import ListItem from "../../reuse/ListItem";
import styles from "./Task.scss";
import { MODAL_TASK_EDIT, MODAL_TASK_DROPDOWN } from "../../ui/constants";
import Icon from "../../reuse/Icon"

import { selectTask } from "../duck/actions";
import TaskDropdown from "../TaskDropdown";
import { getTask } from "../duck/selectors";

export const Task = ({ task, onEdit, onSelect, match }) => {
    const taskRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    
    const [position, setPosition] = useState(null);
    const { _id } = task;

    const onDropdown = () => {
        onSelect(_id);
        const clientRect = taskRef.current.getBoundingClientRect()
        setPosition({ top: clientRect.top + document.documentElement.scrollTop, left: clientRect.left }  );
        setShowDropdown(true);
    }

    const onClick = event => {
        event.preventDefault();
        onSelect(_id);
        onEdit();
    };

    return (
        <ul ref={taskRef} className={styles.Task}>
            <NavLink to={`${match.url}/${_id}`} onClick={onClick}>
                <Typography color="primary">
                    {task.name}
                </Typography>
            </NavLink>
            <Button onClick={onDropdown} type="button" className={styles.TaskEditButton}>
                <Icon size="md">
                    <EditIcon />
                </Icon>
            </Button>
            {showDropdown && <TaskDropdown onHide={() => setShowDropdown(false)} position={position} />}
        </ul>
    )
}

const mapStateToProps = (state, ownProps) => ({
    task: getTask(state, ownProps.taskId)
});

export default withRouter(
    connect(mapStateToProps, {
        onEdit: () => addUiModal(MODAL_TASK_EDIT),
        onSelect: selectTask,
        onShowModal: () => addUiModal(MODAL_TASK_DROPDOWN)
    })(Task)
);