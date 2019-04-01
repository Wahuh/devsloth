import React from "react";
import { connect } from "react-redux";
import Button from "../../reuse/Button";
import HamburgerIcon from "../../reuse/icons/MenuIcon";
import menuStyles from "../../layout/SideMenu/SideMenu.scss";
import styles from "./HamburgerButton.scss";
import { toggleSideMenu } from "../duck/actions";



const HamburgerButton = ({ onShow }) => (
    <Button onClick={() => {
        const sideMenu = document.getElementById(menuStyles.SideMenu);
    const sideMenuOverlay = document.getElementById(menuStyles.SideMenuOverlay);
        sideMenu.style.transform = "translate3d(0, 0, 0)";
        sideMenuOverlay.style.visibility = "visible";
        sideMenuOverlay.style.opacity = 1;
        onShow(true);
    }} theme="icon" className={styles.HamburgerButton}>
        <HamburgerIcon />
    </Button>
);

export default connect(null, {
    onShow: toggleSideMenu
})(HamburgerButton);