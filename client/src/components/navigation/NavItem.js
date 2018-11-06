import React from "react";
import "./NavItem.scss"

const NavItem = (props) => {
    return (
        <div className="NavItem">
            {props.children}
        </div>
    );
}

export default NavItem;