import React from "react";
import "./GroupName.scss";

const GroupName = (props) => {
    return (
        <div className="GroupName">
            SEXY DUDES
            {props.name}
        </div>
    );
}

export default GroupName;