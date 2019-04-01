import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import styles from "./Overlay.scss";

const Overlay = props => {
    const { children, duration, in: inProp, center, onHide, isVisible } = props;
    return (
        <CSSTransition 
            appear
            in={inProp} 
            timeout={isVisible && duration} 
            classNames={{
                enter: styles.Appear,
                enterActive: styles.AppearActive,
                exit: styles.Leave,
                exitActive: styles.LeaveActive,
            }}
            unmountOnExit
        >
            <div className={classNames(
                styles.Overlay,
                { 
                    [styles.Center]: center,
                    [styles.isVisible]: isVisible
                }
            )}
                onClick={onHide}
            >
                {children}
            </div>
        </CSSTransition>
    );
}

export default Overlay;