import { connect } from "react-redux";
import { registrationAuthRequest } from "../duck/actions";

import React, { Component } from "react";
import { string, func } from "prop-types";
import Joi from "joi";

import RegistrationMessage from "../RegistrationMessage";
import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import styles from "./RegistrationForm.scss";

export class RegistrationForm extends Component {
    state = {
        user: {
            email: "",
            password: "",
            username: "",
        },
        validation: {   
            email: {
                successMessage: "Email looks good."
            },
            password: {
                successMessage: "That's a valid password!"
            },
            username: {
                successMessage: ""
            }
        },
    };

    schema = {
        email: Joi.string().required().email({ minDomainAtoms: 2 }).label("Email"),
        password: Joi.string().min(5).max(50).required().label("Password"),
        username: Joi.string().min(1).max(50).required().label("Username"),
    };

    validateForm = () => {
        for (const [key, value] of Object.entries(this.state.validation)) {
            if (value.hasOwnProperty("error")) {
                if (value.error) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    }

    //currentTarget object will be passed into ValidateField
    validateField = ({ name, value }) => {
        const input = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(input, schema);
        return error ? error.details[0].message : null;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //when no fields entered do error
        const result = this.validateForm();
        if (!result) return
        this.props.onRegister(this.state.user);
    }

    handleChange = ({ currentTarget: input }) => {
        const validation = { ...this.state.validation };
        const errorMessage = this.validateField(input);

        if (errorMessage) {
            validation[input.name].message = errorMessage; 
            validation[input.name].error = true;
        } else {
            validation[input.name].error = false;
            validation[input.name].message = validation[input.name].successMessage;
        }

        const user = { ...this.state.user };
        user[input.name] = input.value;
        this.setState({ user, validation });
    }

    render() {
        const { user, validation } = this.state;
        
        return (
            <form onSubmit={this.handleSubmit} className={styles.RegistrationForm}>
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
                    value={user.username}
                    onChange={this.handleChange}
                    name="username" 
                    type="text" 
                    label="Username"
                    placeholder="What should we call you?"
                    error={validation.username.error}
                    message={validation.username.message}
                    top
                 />

                <FloatInput
                    value={user.password}
                    onChange={this.handleChange}
                    name="password" 
                    type="password" 
                    label="Password"
                    placeholder="Choose a password"
                    error={validation.password.error}
                    message={validation.password.message}
                    top
                 />
                 
                <Button theme="action" text="Create Account" /> 
                <RegistrationMessage />
            </form>
        );
    }
}

RegistrationForm.propTypes = {
    onRegister: func.isRequired,
}

export default connect(null, 
    { onRegister: registrationAuthRequest }
)(RegistrationForm);