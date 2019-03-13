import React from "react";
import Typography from "../Typography";
import styles from "./TooltipContent.scss";

const TooltipContent = ({ message }) => (
    <div className={styles.TooltipContent}>
        <Typography color="primary">
            {message}
        </Typography>
    </div>
);

export default TooltipContent;