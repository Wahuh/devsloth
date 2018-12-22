import { connect } from "react-redux";
import { getAlias } from "../../auth/duck/selectors";

import React from "react";

import Typography from "../../reuse/Typography";
import { auth } from "../../auth/duck/uiReducers";

const Alias = ({ alias }) => (
    <Typography>
        {alias}
    </Typography>
);

const mapStateToProps = state => ({
    alias: getAlias(state)
});

export default connect(mapStateToProps)(Alias);
