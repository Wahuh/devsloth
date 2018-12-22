import { connect } from "react-redux";
import { getAuthError, getIsFetching } from "../duck/selectors";

import React from "react";
import FetchingMessage from "../../reuse/FetchingMessage";
import Typography from "../../reuse/Typography";
import styles from "./RegistrationMessage.scss";

const RegistrationMessage = ({ error, isFetching }) => {
    let message;
    if (error) {
        message = <Typography type="button" color="crimson">{error}</Typography>;
    } else if (isFetching) {
        message = <FetchingMessage message="Creating your account" /> 
    } else {
        message = <Typography color="secondary" type="button">It's quick and free.</Typography>
    }
    return <div className={styles.RegistrationMessage}>{message}</div>;
}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
    error: getAuthError(state)
});

export default connect(mapStateToProps)(RegistrationMessage);