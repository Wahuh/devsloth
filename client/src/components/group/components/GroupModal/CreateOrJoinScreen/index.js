import React, { Fragment } from "react";
import CreateGroupButton from "./CreateGroupButton";
import JoinGroupButton from "./JoinGroupButton";

const CreateOrJoinScreen = (props) => {
    return (
        <Fragment>
            <div className="GroupModalColumn">
                <CreateGroupButton onClick={props.onCreate} />
            </div>

            <div className="GroupModalColumn" onClick={props.onJoin}>
                <JoinGroupButton />
            </div>
        </Fragment>
    );
}
//
export default CreateOrJoinScreen;