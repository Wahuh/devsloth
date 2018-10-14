import React from "react";
import "./NavBar.scss";
import SideMenuButton from "../../layout/SideMenuButton";
import DisplayOptions from "../display/components/DisplayOptions";
import ChannelNameContainer from "../chat/containers/ChannelNameContainer";
import DisplayOptionsContainer from "../display/containers/DisplayOptionsContainer";
import NavItem from "./NavItem";

const NavBar = (props) => {
    return (
        <nav className="NavBar">
            <div className="NavBarLeft">
                <NavItem>
                    <SideMenuButton />
                </NavItem>

                <NavItem>
                    <ChannelNameContainer />
                </NavItem>
 
                <NavItem>
                    <DisplayOptionsContainer />
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