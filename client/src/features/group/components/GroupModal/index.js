import React, { Component } from "react";
import Modal from "../../../../pureComponents/Modal";
import * as constants from "../../constants"; 
import CreateOrJoinScreen from "./CreateOrJoinScreen";
import CreateGroupScreen from "./CreateGroupScreen";
import JoinGroupScreen from "./JoinGroupScreen";
import "./GroupModal.scss";

class GroupModal extends Component {
    constructor(props) {
        super(props);

        this.forwardToJoin = this.forwardToJoin.bind(this);
        this.forwardToCreate = this.forwardToCreate.bind(this);
        this.backToCreateOrJoin = this.backToCreateOrJoin.bind(this);
    }

    forwardToCreate() {
        this.props.changeScreen(constants.CREATE_GROUP_SCREEN);
    }

    forwardToJoin() {
        this.props.changeScreen(constants.JOIN_GROUP_SCREEN);
    }

    backToCreateOrJoin() {
        this.props.changeScreen(constants.CREATE_OR_JOIN_GROUP_SCREEN);
    }

    render() {
        let screen;

        if (this.props.screen === constants.CREATE_GROUP_SCREEN) {
            screen = <CreateGroupScreen onBack={this.backToCreateOrJoin} onCreateGroup={this.props.createGroup}/>
        } else if (this.props.screen === constants.JOIN_GROUP_SCREEN) {
            screen = <JoinGroupScreen onBack={this.backToCreateOrJoin} />
        } else {
            screen = <CreateOrJoinScreen onCreate={this.forwardToCreate} onJoin={this.forwardToJoin}/>
        }

        return (
            <Modal show={this.props.show} hide={this.props.hide}>
                <div className="GroupModal">
                    {screen}
                </div>
            </Modal>
        );
    }
}

export default GroupModal;