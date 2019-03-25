import React from "react";
import ChannelMemberCount from "../ChannelMemberCount";
import ChannelTopic from "../ChannelTopic";
import styles from "./ChannelBar.scss";

const ChannelBar = () => (
    <div className={styles.ChannelBar}>
        <ChannelMemberCount />
        <hr className={styles.Divider}></hr>
        <ChannelTopic />
    </div>
);

export default ChannelBar;