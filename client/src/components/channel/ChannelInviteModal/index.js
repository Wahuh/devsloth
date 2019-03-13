import { connect } from "react-redux";


import React from "react";
import Modal from "../../reuse/Modal";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import CloseButton from "../../reuse/buttons/CloseButton";
import FloatInput from "../../reuse/FloatInput";
import ActionBar from "../../reuse/ActionBar";
import Button from "../../reuse/Button";
import { removeUiModal } from "../../ui/duck/actions";
import { MODAL_CHANNEL_INVITE } from "../../ui/constants";

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

export default connect(null, {
    onHide: () => removeUiModal(MODAL_CHANNEL_INVITE)
})(ChannelInviteModal);