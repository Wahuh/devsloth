import React from "react";
import ReactTooltip from "react-tooltip";
import Typography from "../Typography";
import styles from "./Tooltip.scss";

const position = {
    right: styles.Right,
    left: styles.Left,
    top: styles.Top,
    bottom: styles.bottom
}

const Tooltip = ({ message, id, place }) => (
    <ReactTooltip className={place === "right" || place ==="left" ? styles.TooltipSide : styles.Tooltip} place={place} effect="solid" id={id}>
        <Typography type="tooltip">
            {message}
        </Typography>
    </ReactTooltip>
);

export default Tooltip;