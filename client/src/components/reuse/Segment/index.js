import React from "react";
import Button from "../Button";
import styles from "./Segment.scss";

const Segment = ({ active, id, text, onClick, className, children }) => (
    <Button 
        className={className}
        id={id}
        text={text} 
        className={active ? `${styles.Segment} ${styles.SegmentActive}` : `${styles.Segment} ${styles.SegmentInactive}`} 
        onClick={onClick} 
    >
        {children}
    </Button>
);

export default Segment;