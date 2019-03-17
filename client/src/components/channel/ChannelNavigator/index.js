import { connect } from "react-redux";

import React from "react";
import { Redirect } from "react-router-dom";
import { getDefaultChannelId, getSelectedChannelId, getSelectedChannelName, getDefaultChannelName } from "../duck/selectors";
import { getHasChannels, getSelectedGroupId } from "../../group/duck/selectors";

const ChannelNavigator = ({ selectedChannelId, defaultChannelName, hasChannels, selectedGroupId, selectedChannelName }) => {
    if (selectedGroupId) {
        if (hasChannels) {
            return selectedChannelId ?
            <Redirect to={`/${selectedGroupId}/channels/@${selectedChannelName}/chat`} /> :
            <Redirect to={`/${selectedGroupId}/channels/@${defaultChannelName}/chat`} />
        }
        return <Redirect to={`/${selectedGroupId}`} />
    }
    return <Redirect to="/@me" />;
}

const mapStateToProps = state => ({
    selectedGroupId: getSelectedGroupId(state),
    selectedChannelId: getSelectedChannelId(state),
    defaultChannelId: getDefaultChannelId(state),
    selectedChannelName: getSelectedChannelName(state),
    defaultChannelName: getDefaultChannelName(state),
    hasChannels: getHasChannels(state)
});

export default connect(mapStateToProps)(ChannelNavigator);