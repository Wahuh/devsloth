import React from "react";
import BackButton from "../../../../../pureComponents/BackButton";

const JoinGroupScreen = (props) => {
    return (
        <div className="JoinGroupScreen">
            <BackButton onClick={props.onBack} />
        </div>
    );
}

export default JoinGroupScreen;