import { connect } from "react-redux";

import React from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import Toast from "../Toast";
import { getAllToasts } from "../duck/selectors";
import styles from "./ToastRoot.scss";

const ToastRoot = ({ toasts }) => (
    <CSSTransitionGroup
        component="section"
        transitionName={{
            enter: styles.Appear,
            enterActive: styles.AppearActive,
            leave: styles.Leave,
            leaveActive: styles.LeaveActive,
            appear: styles.Appear,
            appearActive: styles.AppearActive
        }} 
        transitionAppear={true} 
        transitionAppearTimeout={300} 
        transitionEnter={true}
        transitionEnterTimeout={300} 
        transitionLeave={true} 
        transitionLeaveTimeout={300}>
        {
            toasts.map(toast => <Toast key={toast._id} toast={toast} />)
        }
    </CSSTransitionGroup>
);

const mapStateToProps = state => ({
    toasts: getAllToasts(state)
});

export default connect(mapStateToProps)(ToastRoot);