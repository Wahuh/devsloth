import { connect } from "react-redux";
import { removeUiModal } from "../../ui/duck/actions";

import React from "react";
import ChannelCreateForm from "../../channel/ChannelCreateForm";

import CloseButton from "../../reuse/buttons/CloseButton";
import Modal from "../../reuse/Modal";
import styles from "./ChannelModal.scss";
import { MODAL_CHANNEL_CREATE } from "../../ui/constants";

const ChannelModal = ({ onHide }) => (
    <Modal onHide={onHide}>
        <CloseButton onClick={onHide} />
        <ChannelCreateForm />
    </Modal>
);


export default connect(null, {
    onHide: () => removeUiModal(MODAL_CHANNEL_CREATE)
})(ChannelModal);