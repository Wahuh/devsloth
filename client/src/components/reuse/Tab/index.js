import React from "react";
import Button from "../Button";
import styles from "./Tab.scss";

const Tab = ({ active, id, text, onClick }) => (
    <Button 
        id={id}
        text={text} 
        className={active ? `${styles.Tab} ${styles.TabActive}` : `${styles.Tab} ${styles.TabInactive}`} 
        onClick={onClick} 
    />
);

export default Tab;