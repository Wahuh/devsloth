import { connect } from "react-redux";
import { createTaskRequest } from "../duck/actions";
import { getCurrentChannel } from "../../channel/duck/selectors";

import React, { Component } from "react";
import ActionButton from "../../reuse/ActionButton";
import Column from "../../reuse/Column";
import Input from "../../reuse/Input";
import Typography from "../../reuse/Typography";
import styles from "./CreateTask.scss";

class CreateTask extends Component {
    state = {
        task: {
            name: "",
            description: "",
            //remove id later
        },
        validation: {
            name: ""
        }
    }

    handleSubmit = (event) => {
        const { createTaskRequest, currentChannel } = this.props;
        event.preventDefault();
        console.log(this.state.task);
        createTaskRequest({
            ...this.state.task,
            currentChannel
        });
    }

    handleChange = ({ currentTarget: input }) => {
        const task = { ...this.state.task }
        task[input.name] = input.value;
        this.setState({ task });
    }

    render() {
        const { task } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={styles.CreateTask}>
                <Input 
                    value={task.name}
                    onChange={this.handleChange}
                    autoFocus
                    label="Task Name"
                    name="name"
                    type="text"
                    placeholder="Give your task a name"
                    required
                />

                <Input 
                    value={task.description}
                    onChange={this.handleChange}
                    autoFocus
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Optionally add a description"
                />
                <Typography>Add to task</Typography>
                <ActionButton primary text="Create Task" />
            </form>
        );
    }
}

const mapStateToProps = state => ({
    currentChannel: getCurrentChannel(state)
});

export default connect(mapStateToProps, {
    createTaskRequest
})(CreateTask);

