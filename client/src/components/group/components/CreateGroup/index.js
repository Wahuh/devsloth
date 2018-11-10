import React from "react";
import Button from "../../../reuse/Button";
import Input from "../../../reuse/Input";
import Row from "../../../reuse/Row";
import Column from "../../../reuse/Column";
import Typography from "../../../reuse/Typography";
import "./CreateGroup.scss";

const CreateGroup = ({ onBack, onCreate }) => {
    return (
        <div className="CreateGroup">
            <Typography>Create a group for yourself or invite colleagues and friends!</Typography>
            <Column>
                <Typography type="body2">GROUP NAME</Typography>
                <Input autoFocus placeholder="Enter your group name" />
            </Column>
            
            <Row width="100%" height="20%" className="CreateGroupActions">
                <Button onClick={onBack} className="ActionButton">Back</Button>
                <Button onCreate={onCreate} className="ActionButton">Create</Button>
            </Row>
        </div>
    );
}
//<Input onEnter={props.onCreateGroup} />
//<BackButton onClick={props.onBack} />
export default CreateGroup;