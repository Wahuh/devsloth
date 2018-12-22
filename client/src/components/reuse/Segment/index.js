import React from "react";
import Button from "../Button";
import styles from "./Segment.scss";

const Segment = ({ active, id, text, onClick, icon }) => (
    <Button 
        id={id}
        text={text} 
        className={active ? `${styles.Segment} ${styles.SegmentActive}` : `${styles.Segment} ${styles.SegmentInactive}`} 
        onClick={onClick} 
    >
        {icon}
    </Button>
);

export default Segment;