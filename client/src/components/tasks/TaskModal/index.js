import { connect } from "react-redux";

import { removeUiModal } from "../../ui/duck/actions";

import React from "react";
import TaskEditForm from "../TaskEditForm";

import CloseButton from "../../reuse/buttons/CloseButton";
import Modal from "../../reuse/Modal";
import styles from "./TaskModal.scss";
import { MODAL_TASK_EDIT } from "../../ui/constants";
import Column from "../../reuse/Column";

const TaskModal = ({ onHide }) => (
    <Modal className={styles.TaskModal} size="lg" onHide={onHide}>
        <CloseButton onClick={onHide} />
        <TaskEditForm />
    </Modal>
);

export default connect(null, {
    onHide: () => removeUiModal(MODAL_TASK_EDIT)
})(TaskModal);