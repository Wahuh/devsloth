import { connect } from "react-redux";
import { addUiPortal } from "../../ui/duck/actions";

import React from "react";
import Dropdown from "../../reuse/Dropdown";
import DropdownItem from "../../reuse/DropdownItem";
import SettingsIcon from "../../reuse/icons/SettingsIcon";
import ArrowLeftIcon from "../../reuse/icons/ArrowLeftIcon";
import { MODAL_GROUP_SETTINGS } from "../../ui/constants";

const GroupDropdown = ({ position, onShowModal, onHide }) => {
    return (
        <Dropdown onHide={onHide} position={position}>
            <DropdownItem onClick={onShowModal} icon={<SettingsIcon />} text="Group Settings" />
            <DropdownItem icon={<ArrowLeftIcon />} text="Hide Sidebar" />
        </Dropdown>
    );
}

export default connect(null, {
    onShowModal: () => addUiPortal({ portalType: MODAL_GROUP_SETTINGS })
})(GroupDropdown);