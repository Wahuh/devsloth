import React from "react";
import Button from "../../Button";
import PlusIcon from "../../icons/PlusIcon";
import styles from "./AddButton.scss";
import Icon from "../../Icon";

const AddButton = ({ onClick }) => (
    <Button type="button" onClick={onClick} className={styles.AddButton}>
        <Icon size="md">
            <PlusIcon />    
        </Icon>
    </Button>
);

export default AddButton;