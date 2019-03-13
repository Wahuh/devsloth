import { connect } from "react-redux";
import { getCurrentGroupName, getCurrentGroupId, getSelectedGroupId, getSelectedGroupName } from "../../group/duck/selectors";
import { deleteGroupRequest } from "../duck/actions";
import { getIsFetching } from "../../ui/duck/selectors";
import React, { Component } from "react";
import ActionBar from "../../reuse/ActionBar";
import Button from "../../reuse/Button";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import FloatInput from "../../reuse/FloatInput";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import Form from "../../reuse/Form";
import { removeUiModal } from "../../ui/duck/actions";
import { MODAL_GROUP_SETTINGS } from "../../ui/constants";
import FormGroup from "../../reuse/FormGroup";
import WarningMessage from "../../reuse/WarningMessage";
import { Field, validate, validateField } from "../../../validation";

class GroupDeleteForm extends Component {
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
        const { onDelete, groupId, groupName } = this.props;
        event.preventDefault();
        const validation = validate(this.state.group, this.schema);
        console.log(validation);
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

        if (this.state.group.name !== groupName) {
            this.setState({
                ...this.state,
                validation: {
                    name: { error: true, message: "must match" }
                }
            });
        }
        onDelete(groupId);
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
        const { groupName, onHide, isFetching } = this.props;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Column  paddingX="xl">
                    <Typography margin="lg" type="heading" color="secondary">
                        Delete {groupName}?
                    </Typography>

                    <FormGroup>
                        <WarningMessage message={`Are you sure you wish to delete ${groupName}? This action cannot be undone.`} />

                        <FloatInput 
                            placeholder="Enter the name of this group" 
                            onChange={this.handleChange}
                            value={group.name}
                            label="Group Name"
                            name="name"
                            type="text"
                            validation={validation.name}
                        />
                    </FormGroup>

                </Column>

                <ActionBar>
                    <Button onClick={onHide} type="button" theme="link" text="Cancel" />
                    <LoadingButton isLoading={isFetching} theme="delete" text="Delete Group" />
                </ActionBar>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    groupName: getSelectedGroupName(state),
    groupId: getSelectedGroupId(state),
    isFetching: getIsFetching(state, "groupDelete")
});

export default connect(mapStateToProps, {
    onDelete: deleteGroupRequest,
    onHide: () => removeUiModal(MODAL_GROUP_SETTINGS)
})(GroupDeleteForm);