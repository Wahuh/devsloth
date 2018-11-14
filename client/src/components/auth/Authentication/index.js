import { connect } from "react-redux";

import React, { Component } from "react";
import Modal from "../../reuse/Modal";
import SlackerLoader from "../SlackerLoader";
import RegistrationForm from "../RegistrationForm";
import styles from "./Authentication.scss";

const Authentication = ({ showAuthentication }) => (
    <Modal show={showAuthentication}>
        <div className={styles.Authentication}>
            <SlackerLoader />
            <RegistrationForm />
        </div>
    </Modal>
);

const mapStateToProps = state => ({
    showAuthentication: state.ui.showAuthentication,
});

export default connect(mapStateToProps)(Authentication);

