import { connect } from "react-redux";
import { joinGroupRequest } from "../duck/actions";

import React, { Component } from "react";
import ActionBar from "../../reuse/ActionBar";
import FloatInput from "../../reuse/FloatInput";
import Button from "../../reuse/Button";
import Typography from "../../reuse/Typography";
import Form from "../../reuse/Form";
import Column from "../../reuse/Column";
import { getIsFetching } from "../../ui/duck/selectors";
import LoadingButton from "../../reuse/buttons/LoadingButton";

class GroupJoinForm extends Component {
    state = {
        inviteLink: ""
    };

    handleChange = ({ currentTarget: input }) => {
        this.setState({ inviteLink: input.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { onJoin } = this.props;
        const { inviteLink } = this.state;
        const inviteId = this.getInviteId(inviteLink);
        onJoin(inviteId);
    }

    getInviteId = (inviteLink) => {
        const index = inviteLink.search("invite");
        return inviteLink.substring(index + 7, inviteLink.length);
    }

    render() {
        const { onBack, isFetching } = this.props;
        const { inviteLink } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Column maxHeight maxWidth paddingTop="xl" paddingX="xl">
                    <Typography margin="sm" bold color="secondary" type="heading">
                        Join a group
                    </Typography>

                    <Typography margin="md" color="tertiary" type="description">
                        To join a group, all you need is an invitation link.
                    </Typography>
    
                    <FloatInput 
                        autoFocus 
                        placeholder="Paste your invitation link here" 
                        onChange={this.handleChange}
                        value={inviteLink}
                        label= "Invite Link"
                        name="link"
                        type="text"
                    />
                </Column>
    
                <ActionBar>
                    <Button onClick={onBack} theme="link" text="Back" />
                    <LoadingButton theme="action" isLoading={isFetching} text="Join Group" />
                </ActionBar>
            </Form>
        );
    }

}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state, "groupJoin")
});

export default connect(mapStateToProps, {
    onJoin: joinGroupRequest
})(GroupJoinForm);