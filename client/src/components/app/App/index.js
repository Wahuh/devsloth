import { connect } from "react-redux";
import { 
    getIsLoggedIn, 
    getIsRejected, 
    getIsLoading, 
    getIsAuthenticated,
    getIsAuthFetching
} from "../../auth/duck/selectors";
import { jwtAuthRequest } from "../../auth/duck/actions";
import { joinGroupQueuedInvite } from "../../group/duck/actions";

import { clearAppError } from "../duck/actions";
import authApi from "../../../api/authApi";

import React, { Component, Fragment } from 'react';
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
        const { onInvite, isFetching } = this.props;
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

                    <ToastRoot />
                    <ModalRoot />
                </Fragment>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    isLoggedIn: getIsLoggedIn(state), //true,// 
    isRejected: getIsRejected(state),
    isAuthenticated: getIsAuthenticated(state),
    isFetching: getIsFetching(state, "jwt"),
});

export default connect(mapStateToProps, {
    onLoad: jwtAuthRequest,
    onClear: clearAppError,
    onQueue: joinGroupQueuedInvite,
    onInvite: addInvite
})(App);