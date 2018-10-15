import React from "react";
import Button from "../../../../../../pureComponents/Button";

const JoinGroupButton = (props) => {
    return (
        <Button onClick={props.onClick}>
            Join a Group
        </Button>
    );
}

export default JoinGroupButton;