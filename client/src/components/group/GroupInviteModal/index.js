import { connect } from "react-redux";
import { removeUiModal } from "../../ui/duck/actions";
import { getSelectedGroupName } from "../../group/duck/selectors";

import React from "react";
import CloseButton from "../../reuse/buttons/CloseButton";
import FloatInput from "../../reuse/FloatInput";
import Modal from "../../reuse/Modal";
import { getDefaultChannelInviteId, getSelectedChannelName } from "../../channel/duck/selectors";
import Typography from "../../reuse/Typography";
import ActionBar from "../../reuse/ActionBar";
import Button from "../../reuse/Button";
import { copyGroupInvite } from "../duck/actions";
import { MODAL_GROUP_INVITE } from "../../ui/constants";
import Column from "../../reuse/Column";

const GroupInviteModal = ({ onHide, onCopy, inviteId, channelName, groupName }) => {
    let input = React.createRef();
    return (
        <Modal size="md" onHide={onHide}>
            <Column maxHeight justifyContent="space-between">
                <Column paddingTop="xl" paddingX="xl">
                    <Typography margin="md" type="heading" color="secondary">
                        Invite members
                    </Typography>

                    <Typography type="description" margin="sm" color="tertiary">
                        To invite someone to <Typography color="primary" type="inline" bold text={groupName} />, just send them the link below:
                    </Typography>

                    <CloseButton onClick={onHide} />

                    <FloatInput 
                        innerRef={input}
                        value={`${window.location.hostname}/invite/${inviteId}`}
                        label="Invitation Link"
                        type="text"
                        readOnly
                    />
                
                    <Column>
                        <Typography type="body" color="tertiary">
                            This link redirects new members to the registration page if they don't have an account. After registering, they'll automatically join the <Typography color="primary" type="inline" bold text={`#${channelName}`} /> channel.
                        </Typography>
                    </Column>
                </Column>

                <ActionBar>
                    <Button onClick={() => {
                        input.current.select();
                        document.execCommand("copy");
                        onCopy(input.current.value);
                    }} theme="action" size="md" text="Copy Link" />
                </ActionBar>
            </Column>
        </Modal>
    );
}

const mapStateToProps = state => ({
    inviteId: getDefaultChannelInviteId(state),
    channelName: getSelectedChannelName(state),
    groupName: getSelectedGroupName(state)
});

export default connect(mapStateToProps, {
    onHide: () => removeUiModal(MODAL_GROUP_INVITE),
    onCopy: copyGroupInvite
})(GroupInviteModal);