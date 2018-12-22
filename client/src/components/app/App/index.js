import { connect } from "react-redux";
import { getIsLoggedIn, getIsRejected } from "../../auth/duck/selectors";
import { jwtAuthRequest } from "../../auth/duck/actions";
import { getIsLoading } from "../duck/selectors";
import { clearAppError } from "../duck/actions";
import authApi from "../../../api/authApi";

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
 
import Authentication from "../../auth/Authentication";
import AppContent from "../AppContent";
import AppLoader from "../AppLoader";
import styles from "./App.scss";

//disable focus on App element when there is a modal active
class App extends Component {
    componentDidMount() {
        document.body.addEventListener("mousedown", () => document.body.classList.add(styles.UsingMouse));
        document.body.addEventListener("keydown", () => document.body.classList.remove(styles.UsingMouse));

        const jwt = authApi.getJwt();
        if (jwt) {
            this.props.onLoad(jwt);
        }
    }

    render() {
        const { isLoading, isLoggedIn, isRejected, onClear } = this.props;
        let component;
        if (isLoading) component = <AppLoader />
        if (isLoggedIn) component = <AppContent />
        else if (isRejected) component = <Redirect to="/login" />
        else component = <Redirect to="/register" />
        //component = <AppContent />

        return (
            <Router>
                <Fragment>
                    <Route exact path="/" render={() => component} />

                    <Route path="/login" render={() => {
                        onClear("auth");
                        if (isLoggedIn) {
                            return <Redirect to="/" />
                        } else {
                            return <Authentication login />          
                        }
                    }} /> 
                    
                    <Route path="/register" render={() => {
                        onClear("auth");
                        if (isLoggedIn) {
                            return <Redirect to="/" />
                        } else {
                            return <Authentication />          
                        }
                    }} /> 
                </Fragment>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    isLoggedIn: getIsLoggedIn(state), //true,// 
    isRejected: getIsRejected(state),
});

export default connect(mapStateToProps, {
    onLoad: jwtAuthRequest,
    onClear: clearAppError,
})(App);