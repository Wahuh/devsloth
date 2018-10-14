import React from "react";
import Button from "../../../../pureComponents/Button";

const CreateGroupButton = (props) => {
    return (
        <Button onClick={props.onClick}>
            Create a Group
        </Button>
    );
}

export default CreateGroupButton;