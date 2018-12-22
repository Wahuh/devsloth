import { connect } from "react-redux";
import { hideUiModal } from "../../ui/duck/actions";

import React from "react";
import UserSettings from "../UserSettings";
import Modal from "../../reuse/Modal";
import styles from "./UserModal.scss";

const UserModal = ({ onHide }) => {
    return (
        <Modal onHide={onHide}>
            <div className={styles.UserModal}>
                <UserSettings />
            </div>
        </Modal>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {
    onHide: hideUiModal
})(UserModal);