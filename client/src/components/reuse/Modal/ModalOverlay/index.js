import React from "react";
import styles from "./ModalOverlay.scss";

const ModalOverlay = ({ children, onClick }) => (
    <div onClick={onClick} className={styles.ModalOverlay}>
        {children}
    </div>
);

export default ModalOverlay;