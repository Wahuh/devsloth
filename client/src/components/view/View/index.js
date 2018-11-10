import { connect } from "react-redux";

import React from "react";

import Chat from "../../chat/Chat";
import MainPanel from "../../layout/MainPanel";
import SecondaryPanel from "../../layout/SecondaryPanel";
import TaskMenu from "../../tasks/components/TaskMenu";
import styles from "./View.scss";

export const View = ({ showChat, showTasks }) => (
    <div className={styles.View}>
        <MainPanel>
            {showChat && <Chat />}
            {showTasks && <TaskMenu />}
        </MainPanel>

        <SecondaryPanel>
            {showChat && <TaskMenu />}
        </SecondaryPanel>
    </div>
);

const mapStateToProps = state => ({
	showChat: state.ui.view.showChat,
	showTasks: state.ui.view.showTasks
});

export default connect(mapStateToProps)(View);