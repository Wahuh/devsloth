import { connect } from "react-redux";
import { removeUiModal } from "../../ui/duck/actions";

import React, { Component } from "react";
import ChannelDeleteForm from "../ChannelDeleteForm";
import ChannelEditForm from "../ChannelEditForm";
import Menu from "../../reuse/Menu";
import MenuItem from "../../reuse/MenuItem";
import Modal from "../../reuse/Modal";
import Typography from "../../reuse/Typography";
import CloseButton from "../../reuse/buttons/CloseButton";
import { MODAL_CHANNEL_SETTINGS } from "../../ui/constants";
import Column from "../../reuse/Column";

const screens = {
    channelDelete: <ChannelDeleteForm />,
    channelEdit: <ChannelEditForm />,
}

class ChannelSettingsModal extends Component {
    state = {
        screen: "channelEdit",
        active: {
            channelEdit: true,
            channelDelete: false
        }
    }

    changeScreen(screen) {
        const active = { ...this.state.active };
        Object.keys(active).forEach(k => active[k] = false);
        active[screen] = true;
        this.setState({ screen, active });
    }

    render() {
        const { active, screen } = this.state;
        const { channelEdit, channelDelete } = active;
        const { onHide } = this.props;
        return (
            <Modal size="lg" onHide={onHide}>
                <CloseButton onClick={onHide} />
                <Column maxHeight maxWidth>
                    <Menu>
                        <MenuItem active={channelEdit} onClick={() => this.changeScreen("channelEdit")}>
                            <Typography color={channelEdit ? "secondary" : "primary"}>
                                Overview
                            </Typography>
                        </MenuItem>

                        <MenuItem active={channelDelete} onClick={() => this.changeScreen("channelDelete")}>
                            <Typography color="error">
                                Delete Channel
                            </Typography>
                        </MenuItem>
                    </Menu>

                    <Column maxHeight maxWidth paddingTop="lg">
                        {screens[screen]}
                    </Column>
                </Column>
            </Modal>
        );        
    }
}

export default connect(null, {
    onHide: () => removeUiModal(MODAL_CHANNEL_SETTINGS)
})(ChannelSettingsModal);