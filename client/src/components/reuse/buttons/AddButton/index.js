import React from "react";
import Button from "../../Button";
import PlusIcon from "../../icons/PlusIcon";
import styles from "./AddButton.scss";

const AddButton = ({ onClick }) => (
    <Button type="button" onClick={onClick} className={styles.AddButton}>
        <PlusIcon />
    </Button>
);

export default AddButton;