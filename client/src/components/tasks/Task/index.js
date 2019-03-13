import { connect } from "react-redux";
import { addUiModal } from "../../ui/duck/actions";

import React, { Fragment } from "react";
import BulletListIcon from "../../reuse/icons/BulletListIcon";
import Button from "../../reuse/Button";
import ChatBubbleIcon from "../../reuse/icons/ChatBubbleIcon";
import DeleteButton from "../../reuse/buttons/DeleteButton";
import EditIcon from "../../reuse/icons/EditIcon";
import Row from "../../reuse/Row";
import TextArea from "../../reuse/TextArea";
import Typography from "../../reuse/Typography";
import ListItem from "../../reuse/ListItem";
import styles from "./Task.scss";
import { MODAL_TASK_EDIT } from "../../ui/constants";
import Icon from "../../reuse/Icon"

import { selectTask } from "../duck/actions";

export const Task = ({ task, onEdit, onSelect }) => {
    const { _id } = task;
    const onClick = () => {
        onSelect(_id);
        onEdit();
    };

    return (
        <ListItem className={styles.Task} onClick={onClick}>
            <Typography color="primary">
                {task.name}
            </Typography>

            <Button className={styles.TaskEditButton}>
                <Icon size="md">
                    <EditIcon />
                </Icon>
            </Button>
        </ListItem>
    )
}

export default connect(null, {
    onEdit: () => addUiModal(MODAL_TASK_EDIT),
    onSelect: selectTask
})(Task);
