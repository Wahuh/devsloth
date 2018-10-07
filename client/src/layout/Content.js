import React from "react";
import "./Content.scss";

const Content = (props) => {
    return (
        <div className="Content">
            {props.children}
        </div>
    );
}

export default Content;