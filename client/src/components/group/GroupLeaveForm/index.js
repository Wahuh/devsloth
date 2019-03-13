import { connect } from "react-redux";
import { leaveGroupRequest } from "../duck/actions";
import { 
    getSelectedGroupId,
    getSelectedGroupName,
} from "../../group/duck/selectors";
import { getMemberIdUser } from "../../members/duck/selectors";

import React, { Component } from "react";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import ActionBar from "../../reuse/ActionBar";
import { getIsFetching } from "../../ui/duck/selectors";
import Form from "../../reuse/Form";

import Column from "../../reuse/Column";

class GroupLeaveForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const { groupId, memberId, onLeave } = this.props
        onLeave({ groupId, memberId });
    }

    render() {
        const { isFetching } = this.props;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Column maxHeight justifyContent="flex-end">
                    <ActionBar>
                        <LoadingButton isLoading={isFetching} text="Leave Group" theme="delete" />
                    </ActionBar>
                </Column>
            </Form>
        );
    }
}

const mapStateToProps = state => ({

    groupId: getSelectedGroupId(state),
    memberId: getMemberIdUser(state),
    isFetching: getIsFetching(state, "groupLeave")
});

export default connect(mapStateToProps, {
    onLeave: leaveGroupRequest
})(GroupLeaveForm);