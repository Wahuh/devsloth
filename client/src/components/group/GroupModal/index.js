import { connect } from "react-redux";
import * as constants from "../constants";
import { createGroup, hideGroupModal, changeScreen } from "../duck/actions";

import React, { Component } from "react";
import Modal from "../../reuse/Modal";
import CreateOrJoin from "../CreateOrJoin";
import CreateGroup from "../CreateGroup";
import JoinGroup from "../JoinGroup";
import styles from "./GroupModal.scss";

class GroupModal extends Component {
    constructor(props) {
        super(props);

        this.forwardToJoin = this.forwardToJoin.bind(this);
        this.forwardToCreate = this.forwardToCreate.bind(this);
        this.back = this.back.bind(this);
    }

    forwardToCreate() {
        this.props.changeScreen(constants.CREATE_GROUP_SCREEN);
    }

    forwardToJoin() {
        this.props.changeScreen(constants.JOIN_GROUP_SCREEN);
    }

    back() {
        this.props.changeScreen(constants.CREATE_OR_JOIN_GROUP_SCREEN);
    }

    render() {
        let screen;

        if (this.props.screen === constants.CREATE_GROUP_SCREEN) {
            screen = <CreateGroup onBack={this.back} onCreate={this.props.createGroup}/>
        } else if (this.props.screen === constants.JOIN_GROUP_SCREEN) {
            screen = <JoinGroup onBack={this.back} />
        } else {
            screen = <CreateOrJoin onCreate={this.forwardToCreate} onJoin={this.forwardToJoin}/>
        }

        return (
            <Modal show={this.props.show} hide={this.props.hide}>
                <div className={styles.GroupModal}>
                    {screen}
                </div>
            </Modal>
        );
    }
}



const mapStateToProps = state => ({
    show: state.ui.groupModal.show,
    screen: state.ui.groupModal.screen,
});

const mapDispatchToProps = (dispatch) => ({
    hide() {
        dispatch(hideGroupModal());
    },

    changeScreen(screen) {
        dispatch(changeScreen(screen));
    },

    createGroup(groupName) {
        dispatch(createGroup(groupName));
        dispatch(hideGroupModal());
        dispatch(changeScreen(constants.CREATE_OR_JOIN_GROUP_SCREEN))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupModal);