import React from "react";
import Button from "../../../reuse/Button";
import Typography from "../../../reuse/Typography";

const JoinGroup = ({ onBack, onJoin }) => {
    return (
        <div className="JoinGroup">
            <Button className="ActionButton">
                <Typography>Join</Typography>
            </Button>
            <Button onClick={onBack} className="ActionButton">
                <Typography>Back</Typography>
            </Button>
        </div>
    );
}
//            <BackButton onClick={props.onBack} />
export default JoinGroup;