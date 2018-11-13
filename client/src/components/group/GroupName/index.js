import React from "react";
import Typography from "../../reuse/Typography";
import styles from "./GroupName.scss";

const GroupName = (props) => (
    <div className={styles.GroupName}>
        <Typography textAlign="left" type="heading">Guys from Landan{props.name}</Typography>
    </div>
);

export default GroupName;