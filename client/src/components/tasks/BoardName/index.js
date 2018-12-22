import { connect } from "react-redux";
import { getCurrentChannelName } from "../../channel/duck/selectors";

import React from "react";
import Typography from "../../reuse/Typography";

const BoardName = ({ name, currentChannelName }) => (
    <Typography type="heading">{`${name} for ${currentChannelName}`}</Typography>
)

const mapStateToProps = state => ({
    //currentChannelName: getCurrentChannelName(state)
});

export default connect(mapStateToProps)(BoardName);