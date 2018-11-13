import React from "react";
import Button from "../Button";
import styles from "./ActionButton.scss";

const ActionButton = ({text, onClick, primary, alignSelf, justifySelf}) => (
    <Button text={text} alignSelf={alignSelf} justifySelf={justifySelf} onClick={onClick} className={primary ? styles.PrimaryButton : styles.SecondaryButton} />
)

export default ActionButton;