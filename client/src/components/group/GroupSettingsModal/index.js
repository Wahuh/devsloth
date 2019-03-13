import { connect } from "react-redux";
import { removeUiModal } from "../../ui/duck/actions";

import React, { Component } from "react";
import GroupEditForm from "../GroupEditForm";
import GroupRolesEdit from "../GroupRolesEdit";
import GroupLeaveForm from "../GroupLeaveForm";
import GroupDeleteForm from "../GroupDeleteForm";

import Button from "../../reuse/Button";
import CloseButton from "../../reuse/buttons/CloseButton";
import Modal from "../../reuse/Modal";
import Menu from "../../reuse/Menu";
import MenuItem from "../../reuse/MenuItem";
import Typography from "../../reuse/Typography";
import { error } from "util";
import { MODAL_GROUP_SETTINGS } from "../../ui/constants";
import { getMemberIsOwner, getMemberIdUser } from "../../members/duck/selectors";
import Column from "../../reuse/Column";

const screens = {
    groupEdit: <GroupEditForm />,
    // rolesEdit: <GroupRolesEdit />,
    groupDelete: <GroupDeleteForm />,
    groupLeave: <GroupLeaveForm />
}

class GroupSettingsModal extends Component {
    state = {
        screen: "groupEdit",
        active: {
            groupEdit: true,
            rolesEdit: false,
            rolesAssign: false,
            groupLeave: false,
            groupDelete: false
        }
    }

    changeScreen(screen) {
        const active = { ...this.state.active };
        Object.keys(active).forEach(k => active[k] = false);
        active[screen] = true;
        this.setState({ screen, active });
    }

    render() {
        const { onHide, isOwner } = this.props;
        const { screen, active } = this.state;
        const { groupEdit, rolesEdit, rolesAssign, groupDelete, groupLeave } = active;

        return (
            <Modal size="lg" onHide={onHide}>
                <Column maxHeight maxWidth>
                    <Menu>
                        <MenuItem active={groupEdit} onClick={() => this.changeScreen("groupEdit")}>
                            <Typography type="description" color={groupEdit ? "secondary" : "primary"}>
                                Overview
                            </Typography>
                        </MenuItem>

                        {/* <MenuItem active={rolesEdit} onClick={() => this.changeScreen("rolesEdit")}>
                            <Typography type="button" color={rolesEdit ? "secondary" : "primary"}>
                                Edit Roles
                            </Typography>
                        </MenuItem>

                        <MenuItem>
                            <Typography type="button" color={rolesAssign ? "secondary" : "primary"}>
                                Assign Roles
                            </Typography>
                        </MenuItem> */}
                        {!isOwner && 
                            <MenuItem active={groupLeave} onClick={() => this.changeScreen("groupLeave")}>
                                <Typography type="description" color="error">
                                    Leave Group
                                </Typography>
                            </MenuItem>
                        }

                        {isOwner && 
                        <MenuItem active={groupDelete} onClick={() => this.changeScreen("groupDelete")}>
                            <Typography type="description" color="error">
                                Delete Group
                            </Typography>
                        </MenuItem>
                    }
                    </Menu>
                    <Column maxHeight maxWidth>
                        {screens[screen]}
                    </Column>
                </Column>
                <CloseButton onClick={onHide} />
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    isOwner: getMemberIsOwner(state, getMemberIdUser(state))
});

export default connect(mapStateToProps, {
    onHide: () => removeUiModal(MODAL_GROUP_SETTINGS),
})(GroupSettingsModal);