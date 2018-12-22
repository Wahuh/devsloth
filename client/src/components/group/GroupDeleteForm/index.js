import { connect } from "react-redux";
import { getCurrentGroupName, getCurrentGroupId } from "../../group/duck/selectors";
import { deleteGroupRequest } from "../duck/actions";

import React, { Component } from "react";
import ActionBar from "../ActionBar";
import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import styles from "./GroupDeleteForm.scss";

class GroupDeleteForm extends Component {
    state = {
        name: "",
    }

    handleSubmit = (event) => {
        const { onDelete, currentGroupId } = this.props;
        event.preventDefault();
        const result = this.validateForm();
        if (!result) return
        onDelete({ _id: currentGroupId });
    }

    handeChange = ({ currentTarget: input}) => {
        this.setState({ name: input.value });
    }

    validateForm = () => {
        const { groupName } = this.props;
        const { name } = this.state;
        if (name === groupName) return true;
        return false;
    }

    render() {
        const { name } = this.state;
        const { groupName } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className={styles.GroupDeleteForm}>
                <div className={styles.Wrapper}>
                    <Typography type="heading">
                        Delete {groupName}
                    </Typography>


                    <div className={styles.WarningMessage}>
                        <Typography color="primary" type="button">
                            Are you sure you wish to delete {groupName}? This action cannot be undone.
                        </Typography>
                    </div>

                    <FloatInput 
                        placeholder="Enter the name of this group" 
                        onChange={this.handeChange}
                        value={name}
                        label={`Delete ${groupName}?`}
                        name="name"
                        type="text"
                        top
                    />
                </div>

                <div className={styles.ActionBar}>
                    <Button theme="delete" text="Delete Group" />
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    groupName: getCurrentGroupName(state),
    currentGroupId: getCurrentGroupId(state)
});

export default connect(mapStateToProps, {
    onDelete: deleteGroupRequest,
})(GroupDeleteForm);