import { connect } from "react-redux";
import { showChatView, showTasksView } from "../duck/actions";

import React from "react";
import ChatIcon from "../../reuse/icons/ChatIcon";
import SegmentedControl from "../../reuse/SegmentedControl";
import styles from "./ViewSwitcher.scss";

const ViewSwitcher = ({ showChatView, showTasksView }) => (
    <SegmentedControl 
        segments={[
            {active: true, id: "ViewChat" , icon: <ChatIcon />, onClick: showChatView},
            {id: "ViewTasks", text: "View Tasks", onClick: showTasksView}
        ]}
        className={styles.ViewSwitcher}
    />
);

export default connect(null, {
    showChatView,
    showTasksView
})(ViewSwitcher);