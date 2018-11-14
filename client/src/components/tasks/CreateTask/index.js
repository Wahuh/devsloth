import React from "react";
import ActionButton from "../../reuse/ActionButton";
import Column from "../../reuse/Column";
import Input from "../../reuse/Input";
import Typography from "../../reuse/Typography";

const CreateTask = () => (
    <Column width="100%" height="100%" justifyContent="center">
        <Typography>Give your task a name:</Typography>
        <Input />
        <Typography>Add a description</Typography>
        <Input />
        <Typography>ADD TO TASK</Typography>
        <ActionButton primary text="Create Task" />
    </Column>
);

export default CreateTask;