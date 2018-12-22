import { connect } from "react-redux";
import { createGroupRequest } from "../duck/actions";

import React, { Component } from "react";
import ActionBar from "../../reuse/ActionBar";
import BackIcon from "../../reuse/icons/BackIcon";
import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import styles from "./CreateGroupForm.scss";

class CreateGroupForm extends Component {
    state = {
        group: {
            name: "",
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

    render() {
        const { group } = this.state;
        const { onBack } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className={styles.CreateGroupForm}>
                <Column className={styles.CreateForm} width="100%" height="100%" justifyContent="center">
                    <Typography>Create a group for yourself or invite colleagues and friends!</Typography>
                    <Column>
                        <FloatInput 
                            autoFocus 
                            placeholder="Enter a group name" 
                            onChange={this.handeChange}
                            value={group.name}
                            label= "Group Name"
                            name="name"
                            type="text"
                            top
                        />
                    </Column>
                </Column>
                
                <ActionBar>
                    <Button onClick={onBack} theme="icon" type="button">
                        <BackIcon />
                    </Button>
                    <Button theme="action" text="Create Group" />
                </ActionBar>
            </form>
        );
    }
}

export default connect(null, {
    onCreate: createGroupRequest,
})(CreateGroupForm);