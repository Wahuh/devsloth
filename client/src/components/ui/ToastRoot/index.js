import { connect } from "react-redux";

import React from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Toast from "../Toast";
import { getAllToasts } from "../duck/selectors";
import styles from "./ToastRoot.scss";

const ToastRoot = ({ toasts }) => (
    <TransitionGroup component={null}>
        {
            toasts.map(toast => 
                <CSSTransition
                    appear
                    timeout={300}
                    classNames={{
                        enter: styles.Appear,
                        enterActive: styles.AppearActive,
                        exit: styles.Leave,
                        exitActive: styles.LeaveActive,
                    }}
                    unmountOnExit
                >
                    <Toast key={toast._id} toast={toast} />
                </CSSTransition>
            )
        }
    </TransitionGroup>

);

const mapStateToProps = state => ({
    toasts: getAllToasts(state)
});

export default connect(mapStateToProps)(ToastRoot);