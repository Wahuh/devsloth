import { connect } from "react-redux";
import React from "react";
import UserSettings from "../UserSettings";
import Modal from "../../reuse/Modal";
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
})(UserModal);