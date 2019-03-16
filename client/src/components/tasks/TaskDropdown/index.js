import React from "react";
import Dropdown from "../../reuse/Dropdown";
import TaskRenameForm from "../TaskRenameForm";
import Modal from "../../reuse/Modal";
import styles from "./TaskDropdown.scss";
import { useComponentVisible } from "../../ui/duck/hooks";

const TaskDropdown = ({ position, onHide }) => {

    const { top, left } = position;
    console.log(position);
    return (
        <Modal isCustom>
            <span onClick={onHide} className={styles.Wrapper}>
                <section style={{ left, top, alignItems: "flex-start", position: "absolute", display: "flex", flexDirection: "row" }}>
                    <TaskRenameForm />
                    <ul className={styles.TaskDropdown}>
                        <li>Archive</li>
                        <li>Change Position</li>
                    </ul>
                </section>
            </span>
        </Modal>
    )
}

export default TaskDropdown;