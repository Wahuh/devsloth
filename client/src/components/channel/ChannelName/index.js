import { connect } from "react-redux";
import { getSelectedChannelName } from "../duck/selectors";

import React from "react";
import Typography from "../../reuse/Typography";
import styles from "./ChannelName.scss";

const ChannelName = ({ channelName }) => (
    channelName ? (<div className={styles.ChannelName}>
        <div className={styles.ChannelHash}>
            <Typography type="subheading">#</Typography>
        </div>

        <Typography type="subheading" color="secondary">
            {channelName}
        </Typography>
    </div>) : null
);

const mapStateToProps = state => ({
    channelName: getSelectedChannelName(state)
});

export default connect(mapStateToProps)(ChannelName);
