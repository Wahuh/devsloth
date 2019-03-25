import React from "react";
import Button from "../../reuse/Button";
import Column from "../../reuse/Column";
import Row from "../../reuse/Row";
import Typography from "../../reuse/Typography";
import styles from "./GroupCreateOrJoin.scss";

const GroupCreateOrJoin = ({ onCreate, onJoin }) => (
    <section className={styles.GroupCreateOrJoin}>
        <Column flex="1" alignItems="center" justifyContent="center">
            <Typography margin="md" type="body" color="primary">Create a group here!</Typography>
            <Button size="md" theme="action" text="Create a group" onClick={onCreate} />
        </Column>
        
        <Column flex="1" alignItems="center" justifyContent="center">
            <Typography margin="md" type="body" color="primary">Got an invite? Join here!</Typography>
            <Button theme="outlined" text="Join a group" onClick={onJoin} />
        </Column>
    </section>
);

export default GroupCreateOrJoin;