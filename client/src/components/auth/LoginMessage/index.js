import { connect } from "react-redux";
import { getAuthError, getIsFetching } from "../duck/selectors";

import React from "react";
import FetchingMessage from "../../reuse/FetchingMessage";
import Typography from "../../reuse/Typography";

const LoginMessage = ({ error, isFetching }) => {
    let message;
    if (error) {
        message = <Typography align="center" color="crimson">{error}</Typography>;
    } else if (isFetching) {
        message = <FetchingMessage message="Logging you in" /> 
    } else {
        message = <Typography align="center">Welcome back to Slacker</Typography>
    }
    return message;
}

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
    error: getAuthError(state)
});

export default connect(mapStateToProps)(LoginMessage);