import React, { Component } from "react";
import Modal from "../../../../pureComponents/Modal";

import CreateOrJoinScreen from "../CreateOrJoinScreen";
import CreateGroupScreen from "../CreateGroupScreen";
import JoinGroupScreen from "../JoinGroupScreen";
import "./GroupModal.scss";

class GroupModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'modal'
        };

        this.forwardToJoin = this.forwardToJoin.bind(this);
        this.forwardToCreate = this.forwardToCreate.bind(this);
    }

    forwardToCreate() {
        this.setState({
            display: "create"
        })
    }

    forwardToJoin() {
        this.setState({
            display: "join"
        });
    }

    render() {
        let screen;
        if (this.state.display === "create") {
            screen = <CreateGroupScreen />
        } else if (this.state.display === "join") {
            screen = <JoinGroupScreen />
        } else {
            screen = <CreateOrJoinScreen onCreate={this.forwardToCreate} onJoin={this.forwardToJoin}/>
        }

        return (
            <Modal show={this.props.showModal} hide={this.props.hide}>
                {screen}
            </Modal>
        );
    }
}

export default GroupModal;