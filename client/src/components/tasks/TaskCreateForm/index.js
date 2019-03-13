import { connect } from "react-redux";

import React, { Component } from "react";
import classNames from "classnames";
import TaskCreateButton from "../TaskCreateButton";
import Button from "../../reuse/Button";
import Typography from "../../reuse/Typography";
import Icon from "../../reuse/Icon";
import PlusIcon from "../../reuse/icons/PlusIcon";
import styles from "./TaskCreateForm.scss";
import Input from "../../reuse/Input";
import { createTaskRequest } from "../duck/actions";
import { getLastTaskId } from "../../lists/duck/selectors";
class TaskCreateForm extends Component {
    state = {
        isCreateable: false,
        isFocused: false,
        task: {
            name: ""
        }
    };

    handleSubmit = event => {
        const { task } = this.state;
        const { _id, onCreate, lastTaskId } = this.props;
        if (task.name) {
            onCreate({
                name: task.name,
                list: _id,
                prev: lastTaskId ? lastTaskId : null
            });
            console.log({
                name: task.name,
                list: _id,
                prev: lastTaskId ? lastTaskId : null
            })
            this.setState({
                task: {
                    name: ""
                }
            });
        }
    }

    handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        const task = { ...this.state.task };
        task[name] = value;
        this.setState({ task });
    }


    handleClick = () => {
        this.setState(prevProps => ({ isCreateable: true }));
    }

    handleFocus = () => {
        this.setState(prevProps => ({ isFocused: !prevProps.isFocused }));
    }

    render() {
        const { isCreateable, isFocused, task } = this.state;
        const { lastTaskId } = this.props;
        console.log("Lasttask", lastTaskId);
        return (
            <form
                autoComplete="off"
                onSubmit={this.handleSubmit}
                className={classNames(
                styles.TaskCreateForm,
                { [styles.isFocused]: isFocused }
            )}>
                <Icon size="md">
                    <PlusIcon />
                </Icon>

                <Input
                    onEnter={this.handleSubmit}
                    className={styles.TaskCreateInput}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleFocus}
                    value={task.name}
                    name="name"
                    type="text"
                    placeholder="Add Task"
                />
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    lastTaskId: getLastTaskId(state, ownProps._id)
})

export default connect(mapStateToProps, {
    onCreate: createTaskRequest
})(TaskCreateForm);