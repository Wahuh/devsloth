import React from "react";
import ActionButton from "../../reuse/ActionButton";
import BackButton from "../../reuse/BackButton";
import styles from "./ActionBar.scss";

const ActionBar = ({ onBack, children }) => (
    <div className={styles.ActionBar}>
        <BackButton onClick={onBack} />
        {children}
    </div>
);

export default ActionBar;