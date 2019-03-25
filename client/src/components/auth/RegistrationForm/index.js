import { connect } from "react-redux";
import { registrationAuthRequest } from "../duck/actions";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { string, func } from "prop-types";
import { Field, validateField, validate } from "../../../validation";

import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import Form from "../../reuse/Form";
import FormGroup from "../../reuse/FormGroup";
import styles from "./RegistrationForm.scss";
import Typography from "../../reuse/Typography";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import Row from "../../reuse/Row";
import { getIsFetching } from "../../ui/duck/selectors";

export class RegistrationForm extends Component {
    state = {
        user: {
            email: "",
            password: "",
            username: "",
        },
        validation: {   
            email: {},
            password: {},
            username: {}
        },
    };

    schema = {
        email: new Field("Email").string().required().email().success("looks good."),
        password: new Field("Password").string().min(5).max(50).required().success("is ready."),
        username: new Field("Username").string().max(30).required().success("is awesome!")
    };

    handleSubmit = (event) => {
        const { onRegister } = this.props;
        event.preventDefault();
        const validation = validate(this.state.user, this.schema);
        if (validation) {
            this.setState({ 
                ...this.state, 
                validation: { 
                    ...this.state.validation, 
                    ...validation 
                } 
            });
            return;
        }
        onRegister(this.state.user);
    }

    handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        const validation = { ...this.state.validation };
        const field = this.schema[name];
        validation[name] = validateField(value, field);

        const user = { ...this.state.user };
        user[name] = value;
        this.setState({ user, validation });
    }

    render() {
        const { user, validation } = this.state;
        const { isFetching } = this.props;
        
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <FloatInput 
                        value={user.email} 
                        onChange={this.handleChange}
                        autoFocus
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        validation={validation.email}
                    />

                    <FloatInput
                        value={user.username}
                        onChange={this.handleChange}
                        name="username" 
                        type="text" 
                        label="Username"
                        placeholder="Choose any name"
                        validation={validation.username}
                    />

                    <FloatInput
                        value={user.password}
                        onChange={this.handleChange}
                        name="password" 
                        type="password" 
                        label="Password"
                        placeholder="Choose a password"
                        validation={validation.password}
                    />

                    <Row paddingTop="sm" alignItems="center" justifyContent="space-between">
                        <Link 
                            onClick={isFetching && function(e) { e.preventDefault(); }} 
                            className={styles.LoginLink} 
                            to="/login"
                        >
                            <Typography>
                                Login
                            </Typography>
                        </Link>

                        <LoadingButton isLoading={isFetching} theme="action" text="Create Account" /> 
                    </Row>
                </FormGroup>
            </Form>
        );
    }
}

RegistrationForm.propTypes = {
    onRegister: func.isRequired,
}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state, "registration")
});

export default connect(mapStateToProps, 
    { onRegister: registrationAuthRequest }
)(RegistrationForm);