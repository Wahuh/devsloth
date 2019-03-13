import { connect } from "react-redux";
import { getModal, getAllModals } from "../duck/selectors";
import { Route, Switch } from "react-router-dom";


import ChannelModal from "../../channel/ChannelModal";
import ChannelSettingsModal from "../../channel/ChannelSettingsModal";
import GroupModal from "../../group/GroupModal";
import GroupInviteModal from "../../group/GroupInviteModal";
import GroupSettingsModal from "../../group/GroupSettingsModal";
import TaskModal from "../../tasks/TaskModal";
import UserModal from "../../user/UserModal";

import React, { Component, Fragment } from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import styles from "./ModalRoot.scss";
import { MODAL_CHANNEL_CREATE, MODAL_CHANNEL_SETTINGS, MODAL_GROUP_CREATE_OR_JOIN, MODAL_GROUP_SETTINGS, MODAL_GROUP_INVITE, MODAL_TASK_EDIT, MODAL_USER_SETTINGS, MODAL_CONNECTION, MODAL_CHANNEL_INVITE } from "../constants";
import ConnectionModal from "../../socket/ConnectionModal";
import ChannelInviteModal from "../../channel/ChannelInviteModal";

const modalComponents = {
    [MODAL_CHANNEL_CREATE]: ChannelModal,
    [MODAL_CHANNEL_INVITE]: ChannelInviteModal,
    [MODAL_CHANNEL_SETTINGS]: ChannelSettingsModal,
    [MODAL_CONNECTION]: ConnectionModal,
    [MODAL_GROUP_CREATE_OR_JOIN]: GroupModal,
    [MODAL_GROUP_SETTINGS]: GroupSettingsModal,
    [MODAL_GROUP_INVITE]: GroupInviteModal,
    [MODAL_TASK_EDIT]: TaskModal,
    [MODAL_USER_SETTINGS]: UserModal,
}


class ModalRoot extends Component {
    state = {

    }
    

    componentDidUpdate(prevProps) {
        const { modals } = this.props;
        if (modals !== prevProps.modals) {
            const resetState = { ...this.state };
            Object.keys(resetState).forEach(v => resetState[v] = false);

            for (const modal of modals) {
                resetState[modal] = true
            }
            this.setState(resetState);
        }
    }

    renderModals = () => {
    }

    render() {
        const modals = this.props.modals.map(
            modal => {
                const SpecificModal = modalComponents[modal];
                return (

                    <SpecificModal  />
                )
            }
        )

        return (
            <CSSTransitionGroup 
            component="section"
            transitionName={{
                enter: styles.Appear,
                enterActive: styles.AppearActive,
                leave: styles.Leave,
                leaveActive: styles.LeaveActive,
                appear: styles.Appear,
                appearActive: styles.AppearActive
            }} 
            transitionAppear={true} 
            transitionAppearTimeout={300} 
            transitionEnter={true}
            transitionEnterTimeout={300} 
            transitionLeave={true} 
            transitionLeaveTimeout={300}>
                {modals}
            </CSSTransitionGroup>
        );
    }
}

            {/* // <Switch>
            //     <Route path="/join/:id" component={GroupModal} />
            //     <Route path="*" render={this.renderModals} />
            // </Switch> */}

const mapStateToProps = state => ({
    modals: getAllModals(state)
});

export default connect(mapStateToProps)(ModalRoot);