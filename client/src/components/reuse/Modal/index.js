import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.scss";
import Overlay from "../Overlay";
import classNames from "classnames";
import Portal from "../../reuse/Portal";
import { useComponentVisible } from "../../ui/duck/hooks";
import ModalContent from "../ModalContent";

const Modal = ({ children, onHide, size, in: inProp }) => {
    const { ref } = useComponentVisible(true, onHide);

    return (
        <Portal>
            <Overlay isVisible center duration={300} in={inProp}>
                <ModalContent
                    in={inProp}
                    className={classNames(sizes[size])}
                    duration={300} 
                    ref={ref} 
                >
                    {children}
                </ModalContent>
            </Overlay>
        </Portal>
    );
}

const sizes = {
    "sm": styles.small,
    "md": styles.medium,
    "lg": styles.large
}

export default Modal;