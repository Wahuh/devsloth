import React from "react";
import Button from "../../Button";
import CloseIcon from "../../icons/CloseIcon";
import styles from "./CloseButton.scss";
import Typography from "../../Typography";

const CloseButton = ({ onClick }) => (
    <div className={styles.Wrapper}>
        <Button onClick={onClick} theme="icon" className={styles.CloseButton} >
            <CloseIcon />
        </Button>
        <Typography type="caption" text="esc" color="tertiary" align="center" />
    </div>
);

export default CloseButton;