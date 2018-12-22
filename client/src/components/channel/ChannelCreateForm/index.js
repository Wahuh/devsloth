import { connect } from "react-redux";
import { createChannelRequest } from "../duck/actions";
import { getCurrentGroupId } from "../../group/duck/selectors";
import { hideUiModal } from "../../ui/duck/actions";

import React, { Component } from "react";

import ActionBar from "../../reuse/ActionBar";
import Button from "../../reuse/Button";
import CloseIcon from "../../reuse/icons/CloseIcon";
import Column from "../../reuse/Column";
import Form from "../../reuse/Form";
import Typography from "../../reuse/Typography";
import FloatInput from "../../reuse/FloatInput";

import styles from "./ChannelCreateForm.scss";

class ChannelCreateForm extends Component {
    state = {
        channel: {
            name: "",
        },
        validation: {

        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { onCreate, currentGroupId } = this.props;
        onCreate({ ...this.state.channel, groupId: currentGroupId });
    }

    handleChange = ({ currentTarget: input }) => {

        const validation = { ...this.state.validation };
        // const errorMessage = this.validateField(input);

        // if (errorMessage) {
        //     validation[input.name].message = errorMessage; 
        //     validation[input.name].error = true;
        // } else {
        //     validation[input.name].error = false;
        //     validation[input.name].message = validation[input.name].successMessage;
        // }

        const channel = { ...this.state.channel };
        channel[input.name] = input.value;
        this.setState({ channel, validation });
    }


    render() {
        const { channel } = this.state;
        const { onHide } = this.props;

        return (
            <form className={styles.ChannelCreateForm} onSubmit={this.handleSubmit}>
                <Column className={styles.InputContainer}>
                    <Typography>Create a channel</Typography>
                    <FloatInput 
                        value={channel.name}
                        onChange={this.handleChange}
                        autoFocus
                        label="Channel Name"
                        name="name"
                        type="text"
                        placeholder="Enter a channel name"
                        top
                    />
                </Column>

                <ActionBar>
                    <Button type="button" onClick={onHide} theme="icon">
                        <CloseIcon />
                    </Button>
                    <Button theme="action" text="Create Channel" />
                </ActionBar>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    currentGroupId: getCurrentGroupId(state)
});

export default connect(mapStateToProps, {
    onCreate: createChannelRequest,
    onHide: hideUiModal
})(ChannelCreateForm);