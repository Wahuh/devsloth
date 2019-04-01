import React from "react";
import classNames from "classnames";
import Overlay from "../Overlay";
import Portal from "../Portal";


const Popover = ({ children, position, in: inProp , onHide, isOverlayVisible }) => {
    let popover = (
        <section 
            style={{ 
                position: "absolute",
                left: position.x, 
                top: position.y,
            }}
        >
            {children}
        </section>
    );

    const handleHide = event => {
        if (event.target === event.currentTarget) {
            console.log(onHide);
            onHide && onHide()
        }
    }

    return (
        <Portal>
            <Overlay isVisible={isOverlayVisible} onHide={handleHide} duration={200} in={inProp}>
                {popover}
            </Overlay>
        </Portal>
    );
}

export default Popover;