import React from "react";
import styles from "./DropdownItem.scss";
import Typography from "../Typography";
import Button from "../Button";
import Icon from "../../reuse/Icon";

const DropdownItem = ({ text, onClick, icon }) => (
    <li className={styles.DropdownItem}>
        <Icon size="md">
            {icon}
        </Icon>
        <Button onClick={onClick} className={styles.DropdownButton}>
            <Typography text={text} type="body" color="primary" />
        </Button>
    </li>
);

export default DropdownItem;