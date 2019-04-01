import React, { useState } from "react";
import { connect } from "react-redux";
import Dropdown from "../../reuse/Dropdown";
import TaskRenameForm from "../TaskRenameForm";
import Modal from "../../reuse/Modal";
import styles from "./TaskDropdown.scss";
import MoveIcon from "../../reuse/icons/MoveIcon";
import { useComponentVisible } from "../../ui/duck/hooks";
import Typography from "../../reuse/Typography";
import Icon from "../../reuse/Icon";
import DeleteIcon from "../../reuse/icons/DeleteIcon";
import { deleteTaskRequest, moveTaskRequest } from "../duck/actions";
import { getSelectedTaskId, getTask } from "../duck/selectors";
import Popover from "../../reuse/Popover";
import { relative } from "path";
import { addUiPortal } from "../../ui/duck/actions";
import TaskMoveForm from "../TaskMoveForm";
import { POPOVER_TASK_MOVE } from "../../ui/constants";

const TaskDropdown = ({ position, index, onHide, in: inProp, onDelete, task, onShowPopover }) => {
    const handleDelete = () => {
        onDelete(task._id)
    }

    const handleMoveClick = event => {
        const rect = event.currentTarget.getBoundingClientRect();
        onShowPopover(
            { 
                portalType: POPOVER_TASK_MOVE, 
                portalProps: { 
                    position: { 
                        x: rect.left - 4, 
                        y: rect.bottom + 4
                    },
                    task,
                    index 
                } 
            });
    }

    return (
        <Popover in={inProp} onHide={onHide} isOverlayVisible position={position}>
            <section className={styles.TaskOverlay}>
                <TaskRenameForm task={task} />
                <ul className={styles.TaskDropdown}>
                    <a onClick={handleMoveClick} className={styles.DropdownItem}>
                        <Icon size="md">
                            <MoveIcon />
                        </Icon>
                        <Typography type="body" text="Move" />
                    </a>

                    <a onClick={handleDelete} className={styles.DropdownItem}>
                        <Icon size="md">
                            <DeleteIcon />
                        </Icon>
                        <Typography type="body" text="Delete" />
                    </a>
                </ul>
            </section>
        </Popover>
    );
}

const mapStateToProps = (state, ownProps) => ({
    task: getTask(state, ownProps)
});

export default connect(mapStateToProps, {
    onDelete: deleteTaskRequest,
    onMove: moveTaskRequest,
    onShowPopover: addUiPortal
})(TaskDropdown);