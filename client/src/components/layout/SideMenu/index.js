import React, { useState, useRef, Fragment } from "react";
import { connect} from "react-redux";
import { CSSTransition } from 'react-transition-group';
import styles from "./SideMenu.scss";
 


const SideMenu = ({ children }) => {
    const [ isVisible, setIsVisible ] = useState(false);
    const overlayRef = useRef(null);
    const handleHide = () => {
        const sideMenu = document.getElementById(styles.SideMenu);
        const sideMenuOverlay = document.getElementById(styles.SideMenuOverlay);
        sideMenu.style.transform = "translate3d(-80vw, 0, 0)";
        sideMenuOverlay.style.opacity = 0;
        setTimeout(function() {
            sideMenuOverlay.style.visibility = "hidden";
        }, 400);
    }
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }
    return (
        // <div id={styles.SideMenuContainer}>
        <Fragment>
            <div id={styles.SideMenu}>
                {children}
            </div>

            {/* <CSSTransition
                in={isVisible}
                timeout={300}
                unmountOnExit
                classNames={{
                    leave: styles.Leave,
                    leaveActive: styles.LeaveActive,
                    appear: styles.Appear,
                    appearActive: styles.AppearActive
                }}
            > */}
                <div ref={overlayRef} id={styles.SideMenuOverlay} onClick={handleHide}></div>
            {/* </CSSTransition> */}
        </Fragment>
        // </div>
    );
}

export default SideMenu;