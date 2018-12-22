import { connect } from "react-redux";
import { hideUiModal } from "../../ui/duck/actions";
import { getCurrentGroupInviteId } from "../../group/duck/selectors";

import React from "react";
import Button from "../../reuse/Button";
import CloseIcon from "../../reuse/icons/CloseIcon";
import FloatInput from "../../reuse/FloatInput";
import ModalContent from "../../reuse/ModalContent";
import Modal from "../../reuse/Modal";
import styles from "./GroupInviteModal.scss";

const GroupInviteModal = ({ onHide, inviteId }) => {
    return (
        <Modal onHide={onHide}>
            <ModalContent>
                <FloatInput 
                    value={`${window.location.hostname}/invite/${inviteId}`}
                    label="Invite Link"
                    type="text"
                    readOnly
                    top
                />

                <Button onClick={onHide} theme="icon" className={styles.CloseButton}>
                    <CloseIcon />
                </Button>
            </ModalContent>
        </Modal>
    );
}

const mapStateToProps = state => ({
    inviteId: getCurrentGroupInviteId(state)
});

export default connect(mapStateToProps, {
    onHide: hideUiModal
})(GroupInviteModal);