import React from "react";
import Typography from "../../reuse/Typography";
import styles from "./GroupIcon.scss";

const GroupIcon = ({ image, text, onClick }) => (
    <div tabIndex="0" onClick={onClick} className={styles.GroupIcon}>
        {image ? image : <Typography type="button">{text.charAt(0)}</Typography>}

        <div className={styles.GroupTooltip}>
            <div className={styles.LeftArrow}></div>

            <div className={styles.TooltipContent}>
                <Typography color="primary" type="button">
                    {text}
                </Typography>
            </div>
        </div>
    </div>
);

export default GroupIcon;