import React from "react";
import Button from "../../reuse/Button";
import HamburgerIcon from "../../reuse/icons/MenuIcon";
import menuStyles from "../../layout/SideMenu/SideMenu.scss";
import styles from "./HamburgerButton.scss";

const HamburgerButton = () => (
    <Button onClick={() => {
        document.getElementById(menuStyles.SideMenuContainer).style.visibility = "visible";
        document.getElementById(menuStyles.SideMenuOverlay).style.visibility = "visible";
        document.getElementById(menuStyles.SideMenu).style.transform = "translate3d(0, 0, 0)";
    }} theme="icon" className={styles.HamburgerButton}>
        <HamburgerIcon />
    </Button>
);

export default HamburgerButton;