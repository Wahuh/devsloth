import React, { Component } from "react";
import "./SideMenuButton.scss";

const SideMenuButton = (props) => {
    function openSideMenu() {
        document.getElementById("SideMenuCover").style.display = "block";
        document.getElementById("SideMenu").style.transform = "translate3d(0, 0, 0)";

        //document.getElementById("App").style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    return (
        <div className="SideMenuButton" onClick={openSideMenu}>
            <div className="IconBar"></div>
            <div className="IconBar"></div>
            <div className="IconBar"></div>
        </div>
    );
}

export default SideMenuButton;