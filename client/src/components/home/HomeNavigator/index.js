import { connect } from "react-redux";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { getDefaultChannelId, getSelectedChannelId, getSelectedChannelName, getDefaultChannelName } from "../duck/selectors";
import { getHasChannels, getSelectedGroupId } from "../../group/duck/selectors";

class HomeNavigator extends Component {
    render() {
        const { selectedChannelId, defaultChannelName, hasChannels, selectedGroupId, selectedChannelName } = this.props;
        if (selectedGroupId) {
            if (hasChannels) {
                return selectedChannelId ?
                <Redirect to={`/${selectedGroupId}/channels/@${selectedChannelName}/chat`} /> :
                <Redirect to={`/${selectedGroupId}/channels/@${defaultChannelName}/chat`} />
            }
            return <Redirect to={`/${selectedGroupId}/channels`} />
        }
        return null;
    }
}

const mapStateToProps = state => ({
    selectedGroupId: getSelectedGroupId(state),
    selectedChannelId: getSelectedChannelId(state),
    defaultChannelId: getDefaultChannelId(state),
    selectedChannelName: getSelectedChannelName(state),
    defaultChannelName: getDefaultChannelName(state),
    hasChannels: getHasChannels(state)
});

export default connect(mapStateToProps)(HomeNavigator);