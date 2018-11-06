import React from "react";
import "./SideMenuRight.scss";

const SideMenuRight = (props) => {
    return (
        <div className="SideMenuRight">
            {props.children}
        </div>
    );
}

export default SideMenuRight;