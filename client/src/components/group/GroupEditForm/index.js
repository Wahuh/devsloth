import { connect } from "react-redux";
import { getCurrentGroupName } from "../duck/selectors";
import { updateGroupRequest } from "../duck/actions";

import React, { Component } from "react";

import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import styles from "./GroupEditForm.scss";

class GroupEditForm extends Component {
    state = {
        edit: false,
        group: {
            name: this.props.currentGroupName,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate(this.state.group);
    }

    handeChange = ({ currentTarget: input}) => {
        const group = { ...this.state.group };
        group[input.name] = input.value;
        this.setState({ group });
    }

    toggleEdit = () => {
        this.setState({ ...state, edit: !this.state.edit});
    }

    render() {
        const { group, edit } = this.state;
        const { currentGroupName } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className={styles.GroupEditForm}>
                <FloatInput 
                    autoFocus 
                    placeholder="Enter name of this group to delete it" 
                    onChange={this.handeChange}
                    onFocus={this.toggleEdit}
                    value={edit ? group.name : currentGroupName}
                    label= "Group Name"
                    name="name"
                    type="text"
                    top
                />
            </form>
        );
    }
}

const mapStateToProps = state => ({
    currentGroupName: getCurrentGroupName(state)
});

export default connect(mapStateToProps, {
    onEdit: updateGroupRequest,
})(GroupEditForm);