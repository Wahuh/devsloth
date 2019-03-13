import React from "react";
import styles from "./DropdownItem.scss";
import Typography from "../Typography";
import Button from "../Button";

const DropdownItem = ({ text, onClick }) => (
    <li className={styles.DropdownItem}>
        <Button onClick={onClick} className={styles.DropdownButton}>
            <Typography text={text} type="body" color="primary" />
        </Button>
    </li>
);

export default DropdownItem;