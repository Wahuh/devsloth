import React from "react";
import ShowIcon from "../../reuse/icons/ShowIcon";
import HideIcon from "../../reuse/icons/HideIcon";
import Button from "../Button";
import styles from "./VisibilityButton.scss";

const VisibilityButton = ({onClick, isVisible}) => (
    <Button className={styles.VisibilityButton} onClick={onClick}>
        {isVisible ? <ShowIcon /> : <HideIcon />}
    </Button>
);

export default VisibilityButton;