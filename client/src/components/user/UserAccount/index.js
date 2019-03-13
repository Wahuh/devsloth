import { connect } from "react-redux";


import React, { Component, Fragment } from "react";
import { Field, validateField, validate } from "../../../validation";
import Column from "../../reuse/Column";
import Form from "../../reuse/Form";
import FormGroup from "../../reuse/FormGroup";
import FloatInput from "../../reuse/FloatInput";
import { getUsername, getUserEmail } from "../duck/selectors";
import ActionBar from "../../reuse/ActionBar";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import Button from "../../reuse/Button";
import styles from "./UserAccount.scss";
import Typography from "../../reuse/Typography";
import { updateUserRequest } from "../duck/actions";
import { getIsFetching } from "../../ui/duck/selectors";

class UserAccount extends Component {
    state = {
        isEditable: false,
        changePassword: false,
        user: {
            username: "",
            email: "",
            currentPassword: "",
            newPassword: ""
        },
        validation: {
            email: {},
            username: {},
            currentPassword: {},
            newPassword: {}
        }
    };

    componentDidUpdate(prevProps) {
        const { username, email } = this.props;  
        if (prevProps.username !== username || prevProps.email !== email) {
            this.handleReset();
        }
    }

    schema = {
        email: new Field("Email").string().required().email().success("looks good."),
        currentPassword: new Field("Current Password").string().min(5).max(50).required().success("is ready."),
        newPassword: new Field("Current Password").string().min(5).max(50).required().success("is ready."),
        username: new Field("Username").string().max(30).success("is awesome!")
    };

    schema2 = {
        email: new Field("Email").string().required().email().success("looks good."),
        currentPassword: new Field("Current Password").string().min(5).max(50).required().success("is ready."),
        username: new Field("Username").string().max(30).success("is awesome!")
    };

    handleSubmit = (event) => {
        const { onUpdate } = this.props;
        const { user, changePassword } = this.state;
        const { newPassword, ...rest } = user;
        event.preventDefault();
        const validation = changePassword ? validate(user, this.schema) : validate(rest, this.schema2);
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
        console.log(user);
        onUpdate(user);
        this.setState({
            user: { ...this.state.user, newPassword: "", currentPassword: "" },
            validation: {
                email: {},
                username: {},
                currentPassword: {},
                newPassword: {}
            },
            changePassword: false
        });
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

    handleEdit = () => {
        const { username, email } = this.props;
        this.setState(prevProps => ({ 
            isEditable: !prevProps.isEditable,
            user: {
                username,
                email,
                currentPassword: "",
                newPassword: ""
            },
            validation: {
                email: {},
                username: {},
                currentPassword: {},
                newPassword: {}
            },
            changePassword: false
        }));
    }

    handleReset = () => {
        this.setState(prevProps => ({ 
            isEditable: false,
            user: {
                username: "",
                email: "",
                currentPassword: "",
                newPassword: ""
            },
            validation: {
                email: {},
                username: {},
                currentPassword: {},
                newPassword: {}
            },
            changePassword: false
        }));
    }

    render() {
        const { username, email, isFetching } = this.props;
        const { isEditable, user, validation, changePassword } = this.state;
        return (
            <Form onSubmit={this.handleSubmit} maxHeight>
                <Column paddingX="xl">
                    {isEditable ? (
                        <FormGroup>
                        <FloatInput 
                            type="text"
                            label="Username"
                            value={user.username}
                            name="username"
                            autoFocus
                            validation={validation.username}
                            onChange={this.handleChange}
                        />
            
                        <FloatInput 
                            type="text"
                            label="Email"
                            name="email"
                            value={user.email}
                            validation={validation.email}
                            onChange={this.handleChange}
                        />
            
                        <FloatInput 
                            type="password"
                            name="currentPassword"
                            label="Current Password"
                            value={user.currentPassword}
                            placeholder="Enter your current password"
                            validation={validation.currentPassword}
                            onChange={this.handleChange}
                        />

                        {changePassword ? (
                            <FloatInput 
                                type="password"
                                name="newPassword"
                                label="New Password"
                                value={user.newPassword}
                                placeholder="Enter a new password"
                                validation={validation.newPassword}
                                onChange={this.handleChange}
                            />
                        ) : <Button type="button" theme="link" text="Change Password?" onClick={() => this.setState({ changePassword: true })} /> }

                    </FormGroup>
                    ) : (
                        <section className={styles.UserAccount}>
                            <Typography type="description" color="tertiary">
                                Username
                            </Typography>

                            <Typography margin="md" color="primary">
                                {username}
                            </Typography>

                            <Typography type="description" color="tertiary">
                                Email
                            </Typography>

                            <Typography color="primary">
                                {email}
                            </Typography>
                        </section>
                    )}
                </Column>
        
                <ActionBar>
                    {isEditable ? (
                        <Fragment>
                            <Button onClick={this.handleEdit} type="button" text="Cancel" theme="link" />
                            <LoadingButton isLoading={isFetching} theme="secondaryAction" text="Save Changes" />
                        </Fragment>
                    ) : (
                        <Button type="button" onClick={this.handleEdit} theme="secondaryAction" size="md" text="Edit Account" />
                    )}
                </ActionBar>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    username: getUsername(state),
    email: getUserEmail(state),
    isFetching: getIsFetching(state, "userUpdate")
});

export default connect(mapStateToProps, {
    onUpdate: updateUserRequest
})(UserAccount);