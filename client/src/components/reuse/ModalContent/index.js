import React from "react";
import styles from "./ModalContent.scss";

const ModalContent = ({ children }) => (
    <div className={styles.ModalContent}>
        {children}
    </div>
);

export default ModalContent;