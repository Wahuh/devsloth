import { connect } from "react-redux";
import { createGroupRequest } from "../duck/actions";

import React, { Component, useState } from "react";
import ActionBar from "../../reuse/ActionBar";
import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import { Field, validate, validateField } from "../../../validation";
import Form from "../../reuse/Form";
import { getIsFetching } from "../../ui/duck/selectors";
import LoadingButton from "../../reuse/buttons/LoadingButton";

const schema = {
    name: new Field("Group Name").string().required().min(2).max(50).success("looks good.")
}

const GroupCreateForm = ({ onBack, isFetching, onCreate }) => {
    const [ name, setName ] = useState("");
    const [ nameValidation, setNameValidation ] = useState("");

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        const field = schema[name];
        const nameValidation = validateField(value, field);
        setName(value)
        setNameValidation(nameValidation)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validation = validate({ name }, schema);
        if (validation) {
            setNameValidation(validation.name)
            return;
        }
        onCreate({ name });
    }

    return (
        <Column maxHeight maxWidth>
            <Form onSubmit={handleSubmit}>
                <Column paddingTop="xl" paddingX="xl">
                    <Typography margin="sm" bold color="secondary" type="heading">
                        Create a group
                    </Typography>

                    <Typography margin="md" color="tertiary" type="description">
                        Invite your friends, colleagues, random people or go solo!
                    </Typography>

                    <FloatInput 
                        autoComplete="off"
                        autoFocus 
                        placeholder="Enter a group name" 
                        onChange={handleChange}
                        value={name}
                        label= "Group Name"
                        name="name"
                        type="text"
                        validation={nameValidation}
                    />
                </Column>
                    
                <ActionBar>
                    <Button type="button" size="md" onClick={() => onBack("createOrJoin")} theme="outlined" text="Back" />
                    <LoadingButton theme="action" isLoading={isFetching} text="Create Group" />
                </ActionBar>
            </Form>
        </Column>
    );
}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state, "groupCreate")
});

export default connect(mapStateToProps, {
    onCreate: createGroupRequest,
})(GroupCreateForm);