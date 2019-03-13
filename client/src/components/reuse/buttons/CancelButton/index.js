import React from "react";
import Button from "../../Button";
import styles from "./CancelButton.scss";

const CancelButton = ({ onClick }) => (
    <Button onClick={onClick} type="button" theme="link" className={styles.CancelButton} text="Cancel" />
);

export default CancelButton;