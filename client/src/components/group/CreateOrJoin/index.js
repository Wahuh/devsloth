import React from "react";
import Column from "../../reuse/Column";
import ActionButton from "../../reuse/ActionButton";
import Divider from "../../reuse/Divider";
import Typography from "../../reuse/Typography";
import styles from "./CreateOrJoin.scss";

const CreateOrJoin = ({ onCreate, onJoin }) => (
    <div className={styles.CreateOrJoin}>
        <Column width="50%" height="100%" alignItems="center" justifyContent="center">
            <Typography>Create a group here!</Typography>
            <ActionButton justifySelf="flex-end" primary text="Create a group" onClick={onCreate} />
        </Column>

        <Divider vertical />
        
        <Column width="50%" height="100%" alignItems="center" justifyContent="center">
            <Typography>Got an invite? Join here!</Typography>
            <ActionButton justifySelf="flex-start" text="Join a group" onClick={onJoin} />
        </Column>
    </div>
);

export default CreateOrJoin;