import React from "react";
import BulletListIcon from "../../reuse/icons/BulletListIcon";
import Button from "../../reuse/Button";
import ChatBubbleIcon from "../../reuse/icons/ChatBubbleIcon";
import EditIcon from "../../reuse/icons/EditIcon";
import Row from "../../reuse/Row";
import Typography from "../../reuse/Typography";
import styles from "./Task.scss";

const Task = ({ name }) => (
    <Row className={styles.Task}>
        <Row className={styles.TaskName} width="50%" height="100%">
            <Typography type="body">{name}</Typography>
        </Row>
        <Row width="50%" height="100%">
            <Button className={styles.TaskButton}>
                <ChatBubbleIcon />
            </Button>
            <Button className={styles.TaskButton}>
                <BulletListIcon />
            </Button>
            <Button className={styles.TaskButton}>
                <EditIcon />
            </Button>
        </Row>
    </Row>
);

export default Task;