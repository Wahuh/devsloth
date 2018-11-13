import React from "react";
import ActionBar from "../ActionBar";
import ActionButton from "../../reuse/ActionButton";
import Input from "../../reuse/Input";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import styles from "./CreateGroup.scss";

const CreateGroup = ({ onBack, onCreate }) => {
    return (
        <div className={styles.CreateGroup}>
            <Column className={styles.CreateForm} width="100%" height="100%" justifyContent="center">
                <Typography>Create a group for yourself or invite colleagues and friends!</Typography>
                <Column>
                    <Typography type="subtitle">GROUP NAME</Typography>
                    <Input autoFocus placeholder="Enter your group name" />
                </Column>
            </Column>
            
            <ActionBar onBack={onBack}>
                <ActionButton primary onClick={onCreate} text="Create" />
            </ActionBar>
        </div>
    );
}
//<Input onEnter={props.onCreateGroup} />
//<BackButton onClick={props.onBack} />
export default CreateGroup;