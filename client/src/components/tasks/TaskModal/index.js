import { connect } from "react-redux";
import { getTaskModal } from "../duck/selectors";
import { hideTaskModal } from "../duck/actions";
import { hideUiModal } from "../../ui/duck/actions";

import React from "react";
import CreateTask from "../CreateTask";

import Modal from "../../reuse/Modal";
import styles from "./TaskModal.scss";

const TaskModal = ({ showTaskModal, onHide }) => (
    <Modal show={showTaskModal} onHide={onHide} >
        <div className={styles.TaskModal}>
            <CreateTask />
        </div>
    </Modal>
);

const mapStateToProps = state => ({
    showTaskModal: getTaskModal(state),
});

export default connect(mapStateToProps, {
    onHide: hideUiModal
})(TaskModal);