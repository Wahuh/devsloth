import React from "react";
import Button from "../../reuse/Button";
import Column from "../../reuse/Column";
import Row from "../../reuse/Row";
import Typography from "../../reuse/Typography";
import styles from "./CreateOrJoin.scss";

const CreateOrJoin = ({ onCreate, onJoin }) => (
    <Row maxHeight maxWidth padding="lg" alignItems="center">
        <Column flex="1" alignItems="center" justifyContent="center">
            <Typography type="body" color="primary">Create a group here!</Typography>
            <Button size="md" theme="action" text="Create a group" onClick={onCreate} />
        </Column>
        
        <Column flex="1" alignItems="center" justifyContent="center">
            <Typography type="body" color="primary">Got an invite? Join here!</Typography>
            <Button theme="secondaryAction" text="Join a group" onClick={onJoin} />
        </Column>
    </Row>
);

export default CreateOrJoin;