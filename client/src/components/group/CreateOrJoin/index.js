import React from "react";
import Button from "../../reuse/Button";
import Column from "../../reuse/Column";
import Divider from "../../reuse/Divider";
import Typography from "../../reuse/Typography";
import styles from "./CreateOrJoin.scss";

const CreateOrJoin = ({ onCreate, onJoin }) => (
    <div className={styles.CreateOrJoin}>
        <Column width="50%" height="100%" alignItems="center" justifyContent="center">
            <Typography>Create a group here!</Typography>
            <Button theme="action" text="Create a group" onClick={onCreate} />
        </Column>

        <Divider vertical />
        
        <Column width="50%" height="100%" alignItems="center" justifyContent="center">
            <Typography>Got an invite? Join here!</Typography>
            <Button theme="action" text="Join a group" onClick={onJoin} />
        </Column>
    </div>
);

export default CreateOrJoin;