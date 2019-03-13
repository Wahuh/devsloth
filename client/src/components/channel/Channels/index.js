import { connect } from "react-redux";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { getDefaultChannelId, getSelectedChannelId } from "../duck/selectors";
import { getHasChannels } from "../../group/duck/selectors";

class Channels extends Component {
    render() {
        const { selectedChannelId, defaultChannelId, hasChannels, match } = this.props;
        if (hasChannels) {
            return selectedChannelId ? 
            <Redirect to={`${match.url}/channels/${selectedChannelId}/chat`} /> :
            <Redirect to={`${match.url}/channels/${defaultChannelId}/chat`} />
        }
        return <Redirect to={`${match.url}/channels`} />
    }
}

const mapStateToProps = state => ({
    selectedChannelId: getDefaultChannelId(state),
    defaultChannelId: getSelectedChannelId(state),
    hasChannels: getHasChannels(state)
});

export default connect(mapStateToProps)(Channels);