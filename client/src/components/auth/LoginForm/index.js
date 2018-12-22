import { connect } from "react-redux";
import { loginAuthRequest } from "../duck/actions";

import React, { Component } from "react";
import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import styles from "./LoginForm.scss";
import LoginMessage from "../LoginMessage";

class LoginForm extends Component {
    state = {
        user: {
            email: "",
            password: ""
        },
        validation: {
            email: {},
            password: {},
        }
};

    validateForm = () => {
        console.log("validating");
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //const result = this.validateForm();
        //if (!result) return
        console.log(this.state.user);
        this.props.onLogin(this.state.user);
    }
    
    handleChange = ({ currentTarget: input }) => {
        const validation = { ...this.state.validation };

        const user = { ...this.state.user };
        user[input.name] = input.value;
        this.setState({ user, validation });
    }

    render() {
        const { user, validation } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={styles.LoginForm}>
                <FloatInput 
                    value={user.email} 
                    onChange={this.handleChange}
                    autoFocus
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    error={validation.email.error}
                    message={validation.email.message}
                    top
                />

                <FloatInput
                    value={user.password}
                    onChange={this.handleChange}
                    name="password" 
                    type="password" 
                    label="Password"
                    placeholder="Enter your password"
                    error={validation.password.error}
                    message={validation.password.message}
                    top
                 />
                <Button theme="secondaryAction" text="Login" /> 
                <LoginMessage />
            </form>
        );
    }
}

export default connect(null, {
    onLogin: loginAuthRequest
})(LoginForm);