import React from "react";
import CreateGroupButton from "../CreateGroupButton";
import JoinGroupButton from "../JoinGroupButton";

const CreateOrJoinScreen = (props) => {
    return (
        <div className="GroupModal">
        <div className="GroupModalColumn">
            <CreateGroupButton onClick={props.onCreate} />
        </div>
        <div className="GroupModalColumn" onClick={props.onJoin}>
            <JoinGroupButton />
        </div>
        </div>
    );
}

export default CreateOrJoinScreen;