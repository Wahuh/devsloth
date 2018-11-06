import React from "react";
import "./NavBar.scss";
import SideMenuButton from "../../layout/SideMenuButton";
import ViewOptionsContainer from "../view/containers/ViewOptionsContainer";
import NavItem from "./NavItem";

const NavBar = (props) => {
    return (
        <nav className="NavBar">
            <div className="NavBarLeft">
                <NavItem>
                    <SideMenuButton />
                </NavItem>
 
                <NavItem>
                    <ViewOptionsContainer />
                </NavItem>
            </div>
            <div className="NavBarRight">
                poop
                poop2
            </div>
        </nav>
    );
}

export default NavBar;