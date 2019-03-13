import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import ChatIcon from "../../reuse/icons/ChatIcon";
import TaskIcon from "../../reuse/icons/TaskIcon";
import Tooltip from "../../reuse/Tooltip";
import styles from "./ChannelViewSwitcher.scss";

const ChannelViewSwitcher = ({ match }) => (
    <div className={styles.ChannelViewSwitcher}>
        <NavLink className={styles.ViewButton} activeClassName={styles.Active} to={`${match.url}/chat`} data-tip data-for="ChatView">
            <ChatIcon />
            <Tooltip id="ChatView" message="View Chat" />
        </NavLink>

        <NavLink className={styles.ViewButton} activeClassName={styles.Active} to={`${match.url}/tasks`} data-tip data-for="TaskView">
            <TaskIcon />
            <Tooltip id="TaskView" message="View Tasks" />
        </NavLink>

        <br className={styles.Divider} />
    </div>
)

export default withRouter((ChannelViewSwitcher));