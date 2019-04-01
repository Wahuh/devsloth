import { connect } from "react-redux";
import { createTaskRequest, updateTaskRequest } from "../duck/actions";
import { getSelectedChannelId, getSelectedChannelName } from "../../channel/duck/selectors";

import React, { Component } from "react";
import TaskEditOptions from "../TaskEditOptions";
import TaskChecklist from "../TaskChecklist";

import ActionBar from "../../reuse/ActionBar";
import Button from "../../reuse/Button";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import FloatInput from "../../reuse/FloatInput";

import Typography from "../../reuse/Typography";
import styles from "./TaskEditForm.scss";
import Column from "../../reuse/Column";
import { getSelectedTask, getTask } from "../duck/selectors";
import TextArea from "../../reuse/TextArea";
import { Field, validate, validateField } from "../../../validation";

class TaskEditForm extends Component {
    state = {
        edit: {
            description: false
        },
        task: {
            //remove id later
        },
        validation: {
            name: ""
        }
    }

    handleSubmit = () => {
        const { onEdit, task } = this.props;
        let updatedTask = { ...this.state.task, _id: task._id };
        if (updatedTask.hasOwnProperty("name") && updatedTask.name) {

        }
        onEdit({ ...this.state.task, _id: task._id });
    }

    handleChange = ({ currentTarget: input }) => {
        const task = { ...this.state.task }
        task[input.name] = input.value;
        this.setState({ ...this.state, task });
    }

    handleEditDescription = ({ currentTarget: input }) => {
        const { task } = this.props;
        this.setState({
            edit: { description: true },
            task: { description: task.description ? task.description : "" }
        });
    }

    cancelEdit = ({ currentTarget: input }) => {
        const edit = { ...this.state.edit };
        const { name } = input;
        edit[name] = false;
        this.setState({ edit });
    }

    handleAddChecklist = () => {
        const task = { ...this.state.task };
        const { checklists } = task;

        checklists.push({
            name: "Checklist",
            _id: checklists.length + 1 
        });

        this.setState({ ...this.state, task })
    }

    handleDeleteChecklist = (id) => {
        const task = { ...this.state.task };
        const { checklists } = task;
        task.checklists = checklists.filter(({ _id }) => _id !== id);
        this.setState({ ...this.state, task });
    }

    handleAddCheckbox = () => {

    }

    handleBlur = ({ currentTarget: input }) => {
        const { name, value } = input;
        if (this.props.task[name]) {
            if (value !== this.props.task[name]) {
                this.handleSubmit();
            }
        } else if (value) {
            this.handleSubmit();
        }
    }

    render() {
        const { task, channelName } = this.props; 
        const { name, description, checklists } = task;

        // const checklistItems = checklists.map(
        //     ({ name, _id }) => 
        //     <TaskChecklist
        //         _id={_id} 
        //         name={name} 
        //         onDelete={this.handleDeleteChecklist}
        //     />
        // );

        return (
            <form onSubmit={this.handleSubmit} className={styles.TaskEditForm}> 
                <section className={styles.FormHeader}>
                    <Typography type="heading" color="secondary" text={name} />
                    <Typography type="description" color="tertiary" text={`in channel #${channelName}`} />
                    <TaskEditOptions 
                        onAddChecklist={this.handleAddChecklist}
                    />
                </section> 

                <Column maxHeight paddingX="xl" paddingTop="lg">

                    {/* <Typography margin="md" type="subheading" color="primary">
                        So you <i>finally</i> decided to get something done?
                    </Typography> */}
{/* 
                    <FloatInput 
                        autoFocus 
                        placeholder="Optionally add a description" 
                        onChange={this.handleChange}
                        value={description}
                        label= "Description"
                        name="description"
                        type="text"
                        top
                    /> */}

 
                        <TextArea
                            onBlur={this.cancelEdit}
                            onClick={this.handleEditDescription}
                            placeholder="Optionally add a description"
                            onChange={this.handleChange}
                            readOnly={!this.state.edit.description}
                            name="description"
                            type="text"
                            minRows={1}
                            maxRows={10}
                            onBlur={this.handleBlur}
                            value={this.state.edit.description ? this.state.task.description : description}
                        />



                    {/* {checklistItems} */}
                </Column>

                <ActionBar>
                    <LoadingButton size="md" theme="secondaryAction" text="Save Task" />
                </ActionBar>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    selectedChannelId: getSelectedChannelId(state),
    task: getSelectedTask(state),
    channelName: getSelectedChannelName(state)
});

export default connect(mapStateToProps, {
    onEdit: updateTaskRequest,
})(TaskEditForm);

