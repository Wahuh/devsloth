import { connect } from "react-redux";
import { getModal } from "../duck/selectors";

import ChannelModal from "../../channel/ChannelModal";
import GroupModal from "../../group/GroupModal";
import GroupInviteModal from "../../group/GroupInviteModal";
import GroupSettingsModal from "../../group/GroupSettingsModal";
import TaskModal from "../../tasks/TaskModal";
import UserModal from "../../user/UserModal";

import React from "react";

const modalComponents = {
    "CHANNEL": <ChannelModal />,
    "GROUP": <GroupModal />,
    "GROUP_SETTINGS": <GroupSettingsModal />,
    "GROUP_INVITE": <GroupInviteModal />,
    "TASK": <TaskModal />,
    "USER": <UserModal />
}

const ModalRoot = ({ modal }) => (
    modal ? modalComponents[modal] : null
);

const mapStateToProps = state => ({
    modal: getModal(state)
});

export default connect(mapStateToProps)(ModalRoot);