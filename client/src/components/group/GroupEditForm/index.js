import { connect } from "react-redux";
import { getSelectedGroupName, getSelectedGroupId } from "../duck/selectors";
import { updateGroupRequest } from "../duck/actions";

import React, { Component, Fragment } from "react";
import Button from "../../reuse/Button";
import CancelButton from "../../reuse/buttons/CancelButton";
import FloatInput from "../../reuse/FloatInput";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import Select from "../../reuse/Select";
import Option from "../../reuse/Option";
import { getAllChannels } from "../../channel/duck/selectors";
import { validate, Field, validateField } from "../../../validation";
import Form from "../../reuse/Form";
import ActionBar from "../../reuse/ActionBar";
import FormGroup from "../../reuse/FormGroup";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import { getIsFetching } from "../../ui/duck/selectors";

class GroupEditForm extends Component {
    state = {
        isEditable: false,
        group: {
            name: this.props.currentGroupName,
        },
        validation: {
            name: {}
        }
    }

    schema = {
        name: new Field("Group Name").string().required().min(2).max(50).success("looks good.")
    }

    handleSubmit = (event) => {
        const { onSave, groupId, groupName } = this.props;
        const { group } = this.state;
        const { name } = group;
        event.preventDefault();
        if (name === groupName) return;
        const validation = validate(group, this.schema);
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
        onSave({ name, _id: groupId });
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

    handleEdit = () => {
        const { groupName } = this.props;
        this.setState(prevProps => ({ 
            isEditable: !prevProps.isEditable,
            group: {
                name: groupName,
            },
            validation: {
                name: {}
            },
        }));
    }

    render() {
        const { group, isEditable, validation } = this.state;
        const { groupName, channels, onHide, isFetching } = this.props;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Column paddingX="xl">

                <Typography margin="lg" type="heading" color="secondary">
                    {groupName} Settings
                </Typography>

                {isEditable ? (
                    <Fragment>
                        <FormGroup>
                        <FloatInput 
                            onFocus={this.handleFocus}
                            onChange={this.handleChange}
                            value={group.name}
                            label= "Group Name"
                            name="name"
                            type="text"
                            validation={validation.name}
                        />
                    </FormGroup>

                        <Typography margin="sm" type="subheading" color="primary">
                            Default Channel
                        </Typography>

                        <Typography margin="sm" type="description" color="tertiary">
                                New group members will be invited to this channel. A message will be sent when they join.
                            </Typography>

                        <FormGroup>
                            <Select>
                                {channels.length > 0 ? 
                                    channels.map( ({ name, _id, isDefault }) => <Option value={_id}>{name}</Option>)
                                    : <Option selected>No Channel</Option>    
                                }
                            </Select>
                        </FormGroup>
                    </Fragment>
                ) : (
                    <section>
                        <Typography type="description" color="tertiary">
                            Group Name
                        </Typography>

                        <Typography margin="md" color="primary">
                            {groupName}
                        </Typography>
                    </section>
                )}
                </Column>
                
                <ActionBar>
                    {isEditable ? (
                        <Fragment>
                            <Button onClick={this.handleEdit} type="button" text="Cancel" theme="outlined" />
                            <LoadingButton isLoading={isFetching} size="md" theme="action" text="Save Changes" />
                        </Fragment>
                    ) : (
                        <Button type="button" onClick={this.handleEdit} text="Edit Group" size="md" theme="action" />
                    )}
                </ActionBar>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    groupName: getSelectedGroupName(state),
    groupId: getSelectedGroupId(state),
    channels: getAllChannels(state),
    isFetching: getIsFetching(state, "groupEdit")
});

export default connect(mapStateToProps, {
    onSave: updateGroupRequest,
})(GroupEditForm);