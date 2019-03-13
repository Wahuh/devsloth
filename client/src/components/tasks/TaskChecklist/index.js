import React from "react";
import AddButton from "../../reuse/buttons/AddButton";
import DeleteButton from "../../reuse/buttons/DeleteButton";
import Checkbox from "../../reuse/Checkbox";
import Typography from "../../reuse/Typography";
import styles from "./TaskCheckList.scss";

const TaskChecklist = ({ _id, name, onDelete }) => {
    return (
        <div className={styles.Checklist}>
            <div className={styles.ChecklistName}>
                <Typography color="tertiary" type="subheading">{name}</Typography>
                <AddButton />
                <DeleteButton onClick={() => onDelete(_id)} />
            </div>
        </div>
    );
}

export default TaskChecklist;