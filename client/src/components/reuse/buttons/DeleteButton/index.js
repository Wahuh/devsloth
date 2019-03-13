import React from "react";
import Button from "../../Button";
import CloseIcon from "../../icons/CloseIcon";
import styles from "./DeleteButton.scss";
import Icon from "../../Icon";

const DeleteButton = ({ onClick }) => (
    <Button type="button" onClick={onClick} theme="icon" className={styles.DeleteButton} >
        <Icon size="sm">
            <CloseIcon />
        </Icon>
    </Button>
);

export default DeleteButton;