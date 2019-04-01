import React from "react";
import ChannelCreateForm from "../../channel/ChannelCreateForm";
import CloseButton from "../../reuse/buttons/CloseButton";
import Modal from "../../reuse/Modal";

const ChannelModal = ({ onHide, in: inProp }) => (
    <Modal size="md" in={inProp} onHide={onHide}>
        <CloseButton onClick={onHide} />
        <ChannelCreateForm />
    </Modal>
);


export default ChannelModal;