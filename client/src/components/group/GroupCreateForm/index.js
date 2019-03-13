import { connect } from "react-redux";
import { createGroupRequest } from "../duck/actions";

import React, { Component } from "react";
import ActionBar from "../../reuse/ActionBar";
import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import { Field, validate, validateField } from "../../../validation";
import Form from "../../reuse/Form";
import { getIsFetching } from "../../ui/duck/selectors";
import LoadingButton from "../../reuse/buttons/LoadingButton";

class GroupCreateForm extends Component {
    state = {
        group: {
            name: "",
        },

        validation: {
            name: {}
        }
    }

    schema = {
        name: new Field("Group Name").string().required().min(2).max(50).success("looks good.")
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const validation = validate(this.state.group, this.schema);
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
        this.props.onCreate(this.state.group);
    }

    handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        const validation = { ...this.state.validation };
        const field = this.schema[name];
        validation[name] = validateField(value, field);

        const group = { ...this.state.group };
        group[name] = value;
        this.setState({ group, validation });
    }

    render() {
        const { group, validation } = this.state;
        const { onBack, isFetching } = this.props;
        return (
            <Column maxHeight maxWidth>
                <Form onSubmit={this.handleSubmit}>
                    <Column paddingTop="xl" paddingX="xl">
                        <Typography margin="sm" bold color="secondary" type="heading">
                            Create a group
                        </Typography>

                        <Typography margin="md" color="tertiary" type="description">
                            Invite your friends, colleagues, random people or go solo!
                        </Typography>

                        <FloatInput 
                            autoFocus 
                            placeholder="Enter a group name" 
                            onChange={this.handleChange}
                            value={group.name}
                            label= "Group Name"
                            name="name"
                            type="text"
                            validation={validation.name}
                        />
                    </Column>
                        
                    <ActionBar>
                        <Button size="md" onClick={onBack} theme="outlined" text="Back" />
                        <LoadingButton theme="action" isLoading={isFetching} text="Create Group" />
                    </ActionBar>
                </Form>
            </Column>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state, "groupCreate")
});

export default connect(mapStateToProps, {
    onCreate: createGroupRequest,
})(GroupCreateForm);