import React from "react";
import "./SecondaryPanel.scss";

const SecondaryPanel = (props) => {
    return (
        <div className="SecondaryPanel">
            {props.children}
        </div>
    );
}

export default SecondaryPanel;

//on mobile swipe from right to access this