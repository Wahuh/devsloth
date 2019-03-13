import { connect } from "react-redux";
import { loginAuthRequest } from "../duck/actions";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import FloatInput from "../../reuse/FloatInput";
import styles from "./LoginForm.scss";
import Typography from "../../reuse/Typography";
import Form from "../../reuse/Form";
import FormGroup from "../../reuse/FormGroup";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import { getIsFetching } from "../../ui/duck/selectors";
import Row from "../../reuse/Row";
import { Field, validateField, validate } from "../../../validation";

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

    schema = {
        email: new Field("Email").string().required().email().success("looks good."),
        password: new Field("Password").string().min(5).max(50).required().success("is ready."),
    };

    handleSubmit = (event) => {
        const { onLogin } = this.props;
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
        onLogin(this.state.user);
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
                        value={user.password}
                        onChange={this.handleChange}
                        name="password" 
                        type="password" 
                        label="Password"
                        placeholder="Enter your password"
                        validation={validation.password}
                    />

                    <Row paddingTop="sm" alignItems="center" justifyContent="space-between">
                        <Link onClick={isFetching && function(e) { e.preventDefault(); }} className={styles.RegisterLink} to="/register">
                            <Typography>
                                Register
                            </Typography>
                        </Link>

                        <LoadingButton isLoading={isFetching} theme="secondaryAction" text="Login" /> 
                    </Row>
                </FormGroup>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state, "login")
});

export default connect(mapStateToProps, {
    onLogin: loginAuthRequest
})(LoginForm);