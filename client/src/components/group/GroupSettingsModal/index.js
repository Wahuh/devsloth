import { connect } from "react-redux";
import { hideUiModal } from "../../ui/duck/actions";

import React, { Component } from "react";
import GroupEditForm from "../GroupEditForm";
import GroupRolesEdit from "../GroupRolesEdit";
import GroupDeleteForm from "../GroupDeleteForm";

import Button from "../../reuse/Button";
import CloseIcon from "../../reuse/icons/CloseIcon";
import Container from "../../reuse/Container";
import Modal from "../../reuse/Modal";
import ModalContent from "../../reuse/ModalContent";
import Menu from "../../reuse/Menu";
import MenuItem from "../../reuse/MenuItem";
import Typography from "../../reuse/Typography";
import styles from "./GroupSettingsModal.scss";

const screens = {
    groupEdit: <GroupEditForm />,
    rolesEdit: <GroupRolesEdit />,
    groupDelete: <GroupDeleteForm />
}

class GroupSettingsModal extends Component {
    state = {
        screen: "groupEdit",
        active: {
            groupEdit: true,
            rolesEdit: false,
            rolesAssign: false,
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
        const { onHide } = this.props;
        const { screen, active } = this.state;
        const { groupEdit, rolesEdit, rolesAssign, groupDelete } = active;

        return (
            <Modal onHide={onHide}>
                <ModalContent>
                    <Menu className={styles.SettingsMenu}>
                        <MenuItem active={groupEdit} onClick={() => this.changeScreen("groupEdit")}>
                            <Typography type="button" color={groupEdit ? "secondary" : "primary"}>
                                Overview
                            </Typography>
                        </MenuItem>

                        <MenuItem active={rolesEdit} onClick={() => this.changeScreen("rolesEdit")}>
                            <Typography type="button" color={rolesEdit ? "secondary" : "primary"}>
                                Edit Roles
                            </Typography>
                        </MenuItem>

                        <MenuItem>
                            <Typography type="button" color={rolesAssign ? "secondary" : "primary"}>
                                Assign Roles
                            </Typography>
                        </MenuItem>

                        <MenuItem active={groupDelete} onClick={() => this.changeScreen("groupDelete")}>
                            <Typography type="button" color="error">
                                Delete Group
                            </Typography>
                        </MenuItem>
                    </Menu>

                    <Container>
                        {screens[screen]}
                    </Container>

                    <Button onClick={onHide} theme="icon" className={styles.CloseButton}>
                        <CloseIcon />
                    </Button>
                </ModalContent>
            </Modal>
        );
    }
}

export default connect(null, {
    onHide: hideUiModal
})(GroupSettingsModal);