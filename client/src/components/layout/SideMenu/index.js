import React, { useState } from "react";
import styles from "./SideMenu.scss";
 
const SideMenu = ({ children }) => {
    const [ isVisible, setIsVisible ] = useState(false);
    const handleHide = () => {
        document.getElementById(styles.SideMenu).style.transform = "translate3d(-80vw, 0, 0)";
        document.getElementById(styles.SideMenuOverlay).style.visibility = "hidden";
        document.getElementById(styles.SideMenuContainer).style.visibility = "hidden";
    }
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }
    return (
        <div id={styles.SideMenuContainer}>
            <div id={styles.SideMenu}>
                {children}
            </div>
            <div id={styles.SideMenuOverlay} onClick={handleHide}></div>
        </div>
    );
}


export default SideMenu;