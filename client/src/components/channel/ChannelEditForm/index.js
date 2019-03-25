import { connect } from "react-redux";
import { getSelectedChannelId, getSelectedChannel } from "../duck/selectors";
import { updateChannelRequest } from "../duck/actions";

import React, { Component } from "react";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import Button from "../../reuse/Button";
import CancelButton from "../../reuse/buttons/CancelButton";
import FloatInput from "../../reuse/FloatInput";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import TextArea from "../../reuse/TextArea";
import Form from "../../reuse/Form";
import ActionBar from "../../reuse/ActionBar";
import { removeUiModal } from "../../ui/duck/actions";
import { MODAL_CHANNEL_SETTINGS } from "../../ui/constants";
import FormGroup from "../../reuse/FormGroup";
import { getIsFetching } from "../../ui/duck/selectors";

class ChannelEditForm extends Component {
    state = {
        isChanged: false,
        edit: {
            name: false,
            topic: false
        },
        channel: {
            name: "",
            topic: ""
        }
    }

    componentDidMount() {
        const { channel } = this.props;
        const { name, topic } = channel;
        this.setState({ ...this.state, channel: { name, topic } });
    }

    handleSubmit = (event) => {
        const { onSave, channelId } = this.props;
        const { channel } = this.state;
        event.preventDefault();
        onSave({ ...channel, _id: channelId });
        this.setState({ ...this.state, isChanged: false });
    }

    handleFocus = ({ currentTarget: input }) => {
        const edit = { ...this.state.edit };
        edit[input.name] = true;
        this.setState({ ...this.state, edit });
    }

    handleChange = ({ currentTarget: input }) => {
        const channel = { ...this.state.channel };
        channel[input.name] = input.value;
        this.setState({ ...this.state, isChanged: true, channel });
    }


    render() {
        const { channel, isChanged, isFetching, edit } = this.state;
        const { name, topic } = channel;
        const { channelName, onHide } = this.props;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Column paddingX="xl">
                    <FormGroup>
                        <Typography margin="lg" color="secondary" type="heading">
                            #{channelName} Settings
                        </Typography>
                        
                        <FloatInput 
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            value={edit.name ? this.props.channel.name : name}
                            label= "Channel Name"
                            name="name"
                            type="text"
                        />
                    </FormGroup>

                        <Typography type="subheading" color="primary" margin="sm">
                            Channel Topic
                        </Typography>

                    <FormGroup>
                        <TextArea 
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            name="topic"
                            type="text"
                            placeholder="Enter a channel topic"
                            value={edit.topic ? this.props.channel.topic : topic}
                        />
                    </FormGroup>
                </Column>

                <ActionBar>
                    <Button theme="outlined" onClick={onHide} text="Cancel" />
                    <LoadingButton
                        isLoading={isFetching}
                        theme="action" 
                        text="Save Changes" 
                    />
                </ActionBar>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    channelId: getSelectedChannelId(state),
    channel: getSelectedChannel(state),
    isFetching: getIsFetching(state, "channelUpdate")
});

export default connect(mapStateToProps, {
    onSave: updateChannelRequest,
    onHide: () => removeUiModal(MODAL_CHANNEL_SETTINGS)
})(ChannelEditForm);