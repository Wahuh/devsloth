import React from "react";
import Typography from "../../../reuse/Typography";
import "./GroupName.scss";

const GroupName = (props) => {
    return (
        <div className="GroupName">
            <Typography type="subtitle2">THANH{props.name}</Typography>
        </div>
    );
}

export default GroupName;