import { connect } from "react-redux";
import { removeUiModal } from "../../ui/duck/actions";

import React from "react";
import UserSettings from "../UserSettings";
import Modal from "../../reuse/Modal";

import styles from "./UserModal.scss";
import { MODAL_USER_SETTINGS } from "../../ui/constants";
import CloseButton from "../../reuse/buttons/CloseButton";

const UserModal = ({ onHide }) => {
    return (
        <Modal size="md" onHide={onHide}>
            <UserSettings />
            <CloseButton onClick={onHide} />
        </Modal>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {
    onHide: () => removeUiModal(MODAL_USER_SETTINGS)
})(UserModal);