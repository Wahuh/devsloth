import React from "react";
import "./NavBar.scss";
import SideMenuButton from "../../layout/SideMenuButton";

const NavBar = (props) => {
    return (
        <nav className="NavBar">
            <SideMenuButton />
        </nav>
    );
}

export default NavBar;