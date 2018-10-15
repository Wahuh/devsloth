import React from "react";
import BackButton from "../../../../../pureComponents/BackButton";
import Input from "../../../../../pureComponents/Input";

const CreateGroupScreen = (props) => {
    return (
        <div className="CreateGroupScreen">
            <Input onEnter={props.onCreateGroup} />
            <BackButton onClick={props.onBack} />
        </div>
    );
}

export default CreateGroupScreen;