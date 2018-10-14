import React from "react";
import "./DisplayMenu.scss";

const DisplayMenu = (props) => {
    return (
        <div className="DisplayMenu">
        hello
            {props.children}
        </div>
    );
}

export default DisplayMenu;