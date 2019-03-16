import { connect } from "react-redux";
import { createChannelRequest } from "../duck/actions";
import { getSelectedGroupId } from "../../group/duck/selectors";

import React, { Component } from "react";

import ActionBar from "../../reuse/ActionBar";
import Button from "../../reuse/Button";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import FloatInput from "../../reuse/FloatInput";
import Form from "../../reuse/Form";
import FormSwitch from "../../reuse/FormSwitch";
import FormGroup from "../../reuse/FormGroup";
import { getIsFetching } from "../../ui/duck/selectors";

import { Field, validate, validateField } from "../../../validation";
import { removeUiModal } from "../../ui/duck/actions";
import { MODAL_CHANNEL_CREATE } from "../../ui/constants";


class ChannelCreateForm extends Component {
    state = {
        channel: {
            name: "",
            isPublic: true
        },
        validation: {
            name: {}
        }
    }

    schema = {
        name: new Field("Channel Name").string().required().min(2).max(50).success("Name looks good.")
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { onCreate, groupId } = this.props;
        const validation = validate(this.state.channel, this.schema);
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
        onCreate({ ...this.state.channel, groupId });
    }

    handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        const validation = { ...this.state.validation };
        const field = this.schema[name];
        validation[name] = validateField(value, field);

        const channel = { ...this.state.channel };
        if (name === "name") {
            if (/\s/.test(value)) {
                channel[name] = value.replace(/.$/, "-");
            } else {
                channel[name] = value.toLowerCase();
            }
        } else {
            channel[name] = value;
        }
        this.setState({ channel, validation });
    }

    handleToggle = ({ currentTarget }) => {
        const { name } = currentTarget;
        const value = currentTarget.checked;
        const channel = { ...this.state.channel };
        channel[name] = value;
        this.setState({ channel });
    }

    render() {
        const { channel, validation } = this.state;
        const { onHide, isFetching } = this.props;
        return (
            <Column maxWidth maxHeight>
                <Form onSubmit={this.handleSubmit}>
                    <Column maxHeight maxWidth paddingTop="xl" paddingX="xl">
                        <Typography margin="sm" bold color="secondary" type="heading">Create a {channel.isPublic ? "public" : "private"} channel</Typography>
                        <Typography margin="md" color="tertiary" type="description">
                            Channels are where your members can chat and create tasks. They can be organized into topics or subgroups - <Typography type="inline" bold color="primary" text="#marketing" /> | <Typography type="inline" bold color="primary" text="#art" /> | <Typography type="inline" bold color="primary" text="#videogames" />, for example.
                        </Typography>

                        <FormGroup>
                            <FloatInput 
                                value={channel.name}
                                onChange={this.handleChange}
                                autoFocus
                                label="Channel Name"
                                name="name"
                                type="text"
                                placeholder="Enter a channel name"
                                validation={validation.name}
                            />

                            <FormSwitch
                                name="isPublic"
                                checked={channel.isPublic}
                                onChange={this.handleToggle}
                                onText="Public"
                                offText="Private"
                            >
                                <Typography type="body" color="primary">
                                    {channel.isPublic ? "Anyone in the group can view and join this channel." : "This channel can only be accessed by invite."}
                                </Typography>
                            </FormSwitch>
                        </FormGroup>
                    </Column>

                    <ActionBar>
                        <Button onClick={onHide} type="button" theme="outlined" text="Cancel" />
                        <LoadingButton isLoading={isFetching} size="md" theme="action" text="Create Channel" />
                    </ActionBar>
                </Form>
            </Column>

        );
    }
}

const mapStateToProps = state => ({
    groupId: getSelectedGroupId(state),
    isFetching: getIsFetching(state, "channelCreate")
});

export default connect(mapStateToProps, {
    onCreate: createChannelRequest,
    onHide: () => removeUiModal(MODAL_CHANNEL_CREATE)
})(ChannelCreateForm);