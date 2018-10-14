import React from "react";
import "./SideMenuList.scss";

const SideMenuList = (props) => {
    return (
        <div id="SideMenuList">
            {props.children}
        </div>
    );
}

export default SideMenuList;