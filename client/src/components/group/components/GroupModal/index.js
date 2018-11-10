import React, { Component } from "react";
import Modal from "../../../reuse/Modal";
import * as constants from "../../constants"; 
import CreateOrJoinScreen from "./CreateOrJoinScreen";
import CreateGroup from "../CreateGroup";
import JoinGroup from "../JoinGroup";
import "./GroupModal.scss";

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