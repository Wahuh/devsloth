import React from "react";
import "./SideMenuPanel.scss";

const SideMenuPanel = (props) => {
    return (
        <div className="SideMenuPanel">
            {props.children}
        </div>
    );
}

export default SideMenuPanel;