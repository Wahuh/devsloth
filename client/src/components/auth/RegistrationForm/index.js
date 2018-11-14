import { connect } from "react-redux";
import { registrationPending } from "../duck/actions";

import React, { Component } from "react";
import { string, func } from "prop-types";
import Joi from "joi";

import Button from "../../reuse/Button";
import Input from "../../reuse/Input";
import Typography from "../../reuse/Typography";
import styles from "./RegistrationForm.scss";
import ValidationMessage from "../../reuse/ValidationMessage";

export class RegistrationForm extends Component {
    state = {
        user: {
            email: "",
            password: "",
        },
        validation: {
            email: {},
            password: {}
        },
    };

    schema = {
        email: Joi.string().required().email({ minDomainAtoms: 2 }).label("Email"),
        password: Joi.string().required().label("Password")
    };

    validateForm = () => {
        //const { error } = Joi.validate(this.state.user, this.schema, { abortEarly: false });
        for (const [key, value] of Object.entries(this.state.validation)) {
            if (!value.success) {
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
            validation[input.name].success = false;
        } else {
            validation[input.name].success = true;
            validation[input.name].error = false;
            validation[input.name].message = input.dataset.successMessage;
        }

        const user = { ...this.state.user };
        user[input.name] = input.value;
        this.setState({ user, validation });
    }

    render() {
        const { user, validation } = this.state;
        const { serverError } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className={styles.RegistrationForm}>
                <Input 
                    value={user.email} 
                    onChange={this.handleChange}
                    autoFocus
                    label="Email"
                    name="email"
                    type="email" 
                    placeholder="Email Address"
                    successMessage="Nice, that's a valid email address."
                    validation={validation.email}
                />
                <Input
                    value={user.password}
                    onChange={this.handleChange}
                    name="password" 
                    type="password" 
                    label="Password"
                    placeholder="Set Password"
                    successMessage="You've got a valid password, let's go!"
                    validation={validation.password}
                 />
                 <Typography>{serverError}</Typography>
                <Button text="Create Account" className={styles.RegistrationButton} /> 
                <Typography align="center" type="body">It's quick and free.</Typography>
            </form>
        );
    }
}

RegistrationForm.propTypes = {
    onRegister: func.isRequired,
}

const mapStateToProps = state => ({
    serverError: state.auth.error,
});

export default connect(mapStateToProps, 
    { onRegister: registrationPending }
)(RegistrationForm);