import React, { Component } from "react";
import Modal from "../../../general/Modal";
import CreateAccount from "../CreateAccount";
import CreateGuest from "../CreateGuest";
import Typography from "../../../general/Typography";
import { bool } from "prop-types";
import "./LoginModal.scss";

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.onCreateAccount = this.onCreateAccount.bind(this);
    }

    onCreateAccount() {
        if (this.state.email && this.state.password) {
            this.props.createAccount();
        }
    }

    render() {
        return (
            <Modal show={this.props.showLoginModal ? true : false}>
                <div className="LoginModal">
                    <Typography align="center" type="title">Slacker.io</Typography>
                    <Typography align="center" type="body">Chat and task management app for Slackers!</Typography>
                    <CreateAccount onCreateAccount={this.onCreateAccount} />
                    <Typography type="body">OR</Typography>
                    <CreateGuest onCreateGuest={this.props.onCreateGuest} />
                </div>
            </Modal>
        );
    }
}

LoginModal.propTypes = {
    userIsLoggedIn: bool.isRequired,
}

export default LoginModal;