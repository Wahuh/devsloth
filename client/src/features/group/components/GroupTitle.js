import React from "react";
import "./GroupTitle.scss";

const GroupTitle = (props) => {
    return (
        <h1 className="GroupTitle">
            {props.title}
        </h1>
    );
}

export default GroupTitle;