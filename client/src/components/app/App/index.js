import { connect } from "react-redux";
import { jwtAuthRequest } from "../../auth/duck/actions";
import { joinGroupQueuedInvite } from "../../group/duck/actions";


import authApi from "../../../api/authApi";

import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
 
import Authentication from "../../auth/Authentication";
import Slacker from "../Slacker";
import styles from "./App.scss";
import ToastRoot from "../../ui/ToastRoot";
import PrivateRoute from "../PrivateRoute";
import ModalRoot from "../../ui/ModalRoot";
import { addInvite } from "../../invites/duck/actions";
import LoadingScreen from "../../ui/LoadingScreen";
import { getIsFetching } from "../../ui/duck/selectors";
import DropdownRoot from "../../ui/DropdownRoot";

//disable focus on App element when there is a modal active
const App = ({ onInvite, isFetching, onLoad }) => {
    useEffect(() => {
        const jwt = authApi.getJwt();
        if (jwt) {
            onLoad(jwt);
        }
    }, [])
    useEffect(() => {
        function handleMouseDown() {
            document.body.classList.add(styles.UsingMouse);
        }
        function handleKeyDown() {
            document.body.classList.remove(styles.UsingMouse)
        }
        document.addEventListener("mousedown", handleMouseDown, false);
        document.addEventListener("keydown", handleKeyDown, false);
        return function cleanup() {
            document.removeEventListener("keydown", handleKeyDown, false);
            document.removeEventListener("mousedown", handleMouseDown, false);
        }
    });

    return isFetching ? <LoadingScreen /> : (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path="/invite/:inviteId" render={({ match }) => {
                        const { params } = match;
                        const { inviteId } = params;
                        console.log("invited", inviteId);
                        onInvite(inviteId);
                        return <Redirect to="/@me" />
                    }} />
                    <Route exact path="/register" component={Authentication} />
                    <Route exact path="/login" component={Authentication} />
                    <PrivateRoute path="/" component={Slacker} />
                </Switch>
                
                <DropdownRoot />
                <ToastRoot />
                <ModalRoot />
            </Fragment>
        </Router>
    );
}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state, "jwt"),
});

export default connect(mapStateToProps, {
    onLoad: jwtAuthRequest,
    onQueue: joinGroupQueuedInvite,
    onInvite: addInvite
})(App);