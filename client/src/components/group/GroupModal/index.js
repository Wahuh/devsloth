import { connect } from "react-redux";
import { hideUiModal } from "../../ui/duck/actions";

import React, { Component } from "react";
import Button from "../../reuse/Button";
import CloseIcon from "../../reuse/icons/CloseIcon";
import CreateOrJoin from "../CreateOrJoin";
import CreateGroupForm from "../CreateGroupForm";
import JoinGroupForm from "../JoinGroupForm";
import Modal from "../../reuse/Modal";
import styles from "./GroupModal.scss";

class GroupModal extends Component {
    state = {
        screen: "createOrJoin",
    }

    screens = {
        createOrJoin: <CreateOrJoin onCreate={() => this.changeScreen("create")} onJoin={() => this.changeScreen("join")} />,
        create: <CreateGroupForm onBack={() => this.changeScreen("createOrJoin")} />,
        join: <JoinGroupForm onBack={() => this.changeScreen("createOrJoin")} />
    }

    changeScreen(screen) {
        console.log(screen);
        this.setState({ screen });
    }

    render() {
        const { onHide } = this.props;
        const { screen } = this.state;
        return (
            <Modal onHide={onHide}>
                <div className={styles.GroupModal}>
                    <Button onClick={onHide} theme="icon" className={styles.CloseButton}>
                        <CloseIcon />
                    </Button>
                    {this.screens[screen]}
                </div>
            </Modal>
        );
    }
}

export default connect(null, {
    onHide: hideUiModal
})(GroupModal);