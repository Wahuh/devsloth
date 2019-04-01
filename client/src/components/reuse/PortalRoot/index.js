import { connect } from "react-redux";
import React from "react";
import { DROPDOWN_TASK, MODAL_GROUP_SETTINGS, MODAL_GROUP_CREATE_OR_JOIN, MODAL_GROUP_INVITE, MODAL_CHANNEL_CREATE, POPOVER_TASK_MOVE, MODAL_CHANNEL_SETTINGS, DROPDOWN_LIST } from "../../ui/constants";
import TaskDropdown from "../../tasks/TaskDropdown";
import { getPortals } from "../../ui/duck/selectors";
import { removeUiPortal, unmountUiPortal } from "../../ui/duck/actions";
import GroupSettingsModal from "../../group/GroupSettingsModal";
import { TransitionGroup } from "react-transition-group";
import GroupModal from "../../group/GroupModal";
import GroupInviteModal from "../../group/GroupInviteModal";
import ChannelModal from "../../channel/ChannelModal";
import ChannelSettingsModal from "../../channel/ChannelSettingsModal";
import TaskMoveForm from "../../tasks/TaskMoveForm";
import ListDropdown from "../../lists/ListDropdown";
const portalComponents = {
    [DROPDOWN_TASK]: TaskDropdown,
    [MODAL_GROUP_SETTINGS]: GroupSettingsModal,
    [MODAL_GROUP_CREATE_OR_JOIN]: GroupModal,
    [MODAL_GROUP_INVITE]: GroupInviteModal,
    [MODAL_CHANNEL_CREATE]: ChannelModal,
    [MODAL_CHANNEL_SETTINGS]: ChannelSettingsModal,
    [POPOVER_TASK_MOVE]: TaskMoveForm,
}

const PortalRoot = ({ portals, onRemove }) => {
    if (portals && portals.length > 0) {
        console.log(portals, "portals");
    }

    const portalItems = portals.map(
        ({ portalType, portalProps }) => {
            const Portal = portalComponents[portalType];
            console.log(portalType);
            return <Portal key={portalType} onHide={() => onRemove(portalType)} {...portalProps} />
        }
    )
    console.log(portalItems, "portals");
    return (
        <TransitionGroup
            component={null}
        >
            {portalItems}
        </TransitionGroup>
    );
}

const mapStateToProps = state => ({
    portals: getPortals(state)
});

export default connect(mapStateToProps, {
    onRemove: removeUiPortal,
    onUnmount: unmountUiPortal
})(PortalRoot);