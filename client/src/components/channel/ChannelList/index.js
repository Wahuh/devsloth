import { connect } from "react-redux";

import React from "react";
import List from "../../reuse/List";
import styles from "./ChannelList.scss";
import Channel from "../Channel";
import { getChannelIds } from "../duck/selectors";
import { getSelectedGroupId } from "../../group/duck/selectors";

const ChannelList = ({ channelIds, selectedGroupId }) => (
    <List className={styles.ChannelList}>
        {channelIds.map(id => <Channel key={id} _id={id} groupId={selectedGroupId} />)}
    </List>
);


const mapStateToProps = state => ({
    channelIds: getChannelIds(state),
    selectedGroupId: getSelectedGroupId(state)
});

export default connect(mapStateToProps)(ChannelList);