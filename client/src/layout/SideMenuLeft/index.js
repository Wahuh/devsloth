import React from "react";
import "./SideMenuLeft.scss";

const SideMenuLeft = (props) => {
    return (
        <div id="SideMenuLeft">
            {props.children}
        </div>
    );
}

export default SideMenuLeft;