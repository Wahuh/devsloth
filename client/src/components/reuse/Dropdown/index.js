import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./Dropdown.scss";
import { useComponentVisible } from "../../ui/duck/hooks";
import Overlay from "../Overlay";
import Portal from "../Portal";


const Dropdown = ({ children, position, onHide, overlay }) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

    useEffect(() => {
        if (!isComponentVisible && onHide) {
            onHide()
        }
    }, [ isComponentVisible ])

    let dropdown = (
        <ul 
            style={position && { left: position.x, top: position.y }} 
            className={classNames(styles.Dropdown)} 
            ref={ref}
        >
            {children}
        </ul>
    );
    return (
        <Portal>
            {overlay ? (
                <Overlay duration={200} isVisible={isComponentVisible}>
                    {dropdown}
                </Overlay>
            ) : dropdown
            }
        </Portal>
    );
}

export default Dropdown;