import { connect } from "react-redux";
import { removeUiModal } from "../../ui/duck/actions";

import React, { Component } from "react";
import CloseButton from "../../reuse/buttons/CloseButton";
import CreateOrJoin from "../CreateOrJoin";
import GroupCreateForm from "../GroupCreateForm";
import GroupJoinForm from "../GroupJoinForm";
import Modal from "../../reuse/Modal";
import styles from "./GroupModal.scss";
import { MODAL_GROUP_CREATE_OR_JOIN } from "../../ui/constants";

class GroupModal extends Component {
    state = {
        screen: "createOrJoin",
    }

    screens = {
        createOrJoin: <CreateOrJoin onCreate={() => this.changeScreen("create")} onJoin={() => this.changeScreen("join")} />,
        create: <GroupCreateForm onBack={() => this.changeScreen("createOrJoin")} />,
        join: <GroupJoinForm onBack={() => this.changeScreen("createOrJoin")} />
    }

    changeScreen(screen) {
        this.setState({ screen });
    }

    render() {
        const { onHide } = this.props;
        const { screen } = this.state;
        return (
            <Modal onHide={onHide}>
                <CloseButton onClick={onHide} />
                {this.screens[screen]}
            </Modal>
        );
    }
}

export default connect(null, {
    onHide: () => removeUiModal(MODAL_GROUP_CREATE_OR_JOIN)
})(GroupModal);