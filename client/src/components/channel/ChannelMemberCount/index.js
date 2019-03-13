import { connect } from "react-redux";

import React from "react";
import Typography from "../../reuse/Typography";
import MemberIcon from "../../reuse/icons/MemberIcon";
import styles from "./ChannelMemberCount.scss";
import Row from "../../reuse/Row";
import { getSelectedChannelMemberCount } from "../duck/selectors";

const ChannelMemberCount = ({ memberCount }) => (
    <div className={styles.ChannelMemberCount}>
    
        <MemberIcon />
        <Typography type="description" color="primary" bold>
            {memberCount}
        </Typography>
    </div>
);

const mapStateToProps = state => ({
    memberCount: getSelectedChannelMemberCount(state)
});

export default connect(mapStateToProps)(ChannelMemberCount);
