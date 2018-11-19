import React from "react";
import Button from "../Button";
import styles from "./Segment.scss";

const Segment = ({ active, id, text, onClick }) => (
    <Button 
        id={id}
        text={text} 
        className={active ? `${styles.Segment} ${styles.SegmentActive}` : `${styles.Segment} ${styles.SegmentInactive}`} 
        onClick={onClick} 
    />
);

export default Segment;