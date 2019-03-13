import { connect } from "react-redux";
import { getIsAuthenticated, getIsRejected } from "../duck/selectors";

import React from "react";
import { Redirect, Route } from "react-router-dom";

import RegistrationForm from "../RegistrationForm";
import LoginForm from "../LoginForm";
import SlackerLoader from "../SlackerLoader";
import Column from "../../reuse/Column";
import styles from "./Authentication.scss";

const Authentication = ({ isAuthenticated, isRejected }) => (
    isAuthenticated ? (
        <Redirect to="/@me" />
    ) : (
        <Column alignItems="center" justifyContent="center" maxHeight maxWidth>
            <section className={styles.Authentication}>
                <SlackerLoader />
                
                <Route path="/register" component={RegistrationForm} />
                <Route path="/login" component={LoginForm} /> 

                {isRejected && <Redirect to="/login" /> }
            </section>
        </Column>
    )
);

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state),
    isRejected: getIsRejected(state)
});

export default connect(mapStateToProps)(Authentication);