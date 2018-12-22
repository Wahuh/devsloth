import { connect } from "react-redux";
import { getIsFetching } from "../duck/selectors";

import React from "react";
import { Link } from "react-router-dom";

import SlackerLoader from "../SlackerLoader";
import RegistrationForm from "../RegistrationForm";
import LoginForm from "../LoginForm";
import styles from "./Authentication.scss";

const Authentication = ({ isFetching, login }) => (
    <div className={styles.Authentication}>
        <div className={styles.FormContainer}>
            <SlackerLoader />
            
            {login ? <LoginForm /> : <RegistrationForm />}

            <Link className={styles.AuthLink} onClick={isFetching ? e => e.preventDefault() : null} to={login ? "/register" : "/login"}>
                {login ? "Register >" : "Login >"}
            </Link>
        </div>

        <div className={styles.ContentContainer}>
            hello
        </div>
    </div>
);

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
});

export default connect(mapStateToProps)(Authentication);