import React from "react";
import { NavLink } from "react-router-dom";
import ChatIcon from "../../reuse/icons/ChatIcon";
import TaskIcon from "../../reuse/icons/TaskIcon";
import ChannelName from "../ChannelName";
import Column from "../../reuse/Column";
import ChannelViewSwitcher from "../ChannelViewSwitcher";
import ChannelMemberCount from "../ChannelMemberCount";
import Divider from "../../reuse/Divider";
import Row from "../../reuse/Row";
import ChannelTopic from "../ChannelTopic";
import styles from "./ChannelBar.scss";

const ChannelBar = () => (
    <div className={styles.ChannelBar}>
        <ChannelMemberCount />
        <Divider vertical />
        <ChannelTopic />
    </div>
);

export default ChannelBar;