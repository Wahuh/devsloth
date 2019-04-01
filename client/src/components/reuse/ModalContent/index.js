import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import styles from "./ModalContent.scss";

const ModalContent = React.forwardRef((props, ref) => {
    const { children, in: inProp, duration, className } = props;
    const [ inThisProp, setInThisprop ] = useState(false);

    useEffect(() => {
        setInThisprop(true);
    }, [])
    useEffect(() => {
        if (!inProp) {
            setInThisprop(false);
        }
    }, [ inProp ])
        return (
        <CSSTransition
            onEnter={() => console.log("entered")}
            in={inThisProp}
            timeout={duration}
            appear
            classNames={{
                enter: styles.Appear,
                enterActive: styles.AppearActive,
                exit: styles.Leave,
                exitActive: styles.LeaveActive,
            }}
            mountOnEnter
            unmountOnExit
        >
            <div ref={ref} className={classNames(styles.ModalContent, className)}>
                {children}
            </div>
        </CSSTransition>
    )
})

export default ModalContent;