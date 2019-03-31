import React from "react";
import Modal from "../../reuse/Modal";
import Column from "../../reuse/Column";
import CloseButton from "../../reuse/buttons/CloseButton";
import ActionBar from "../../reuse/ActionBar";

const ChannelInviteModal = ({ onHide }) => (
    <Modal onHide={onHide}>
    <Column maxHeight justifyContent="space-between">
        <Column paddingTop="xl" paddingX="xl">

            <CloseButton onClick={onHide} />

        
        </Column>

        <ActionBar>

        </ActionBar>
    </Column>
</Modal>
);

export default ChannelInviteModal;