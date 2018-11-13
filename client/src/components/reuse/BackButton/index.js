import React from "react";
import Button from "../Button";
import BackIcon from "../icons/BackIcon";
import styles from "./BackButton.scss";

const BackButton = ({onClick}) => (
    <Button className={styles.BackButton} onClick={onClick}><BackIcon /></Button>
);

export default BackButton;