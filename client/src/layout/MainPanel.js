import React from "react";
import "./MainPanel.scss";

const MainPanel = (props) => {
    return (
        <div className="MainPanel">
            {props.children}
        </div>
    );
}

export default MainPanel;