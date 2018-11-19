import { connect } from "react-redux";
import { getChatView, getTasksView } from "../duck/selectors";

import React, { Fragment } from "react";

import Chat from "../../chat/Chat";
import MainPanel from "../../layout/MainPanel";
import SecondaryPanel from "../../layout/SecondaryPanel";
import TaskBoard from "../../tasks/TaskBoard";
import TaskMenu from "../../tasks/TaskMenu";
import styles from "./View.scss";

export const View = ({ showChat, showTasks }) => (
    <div className={styles.View}>
        {
            showChat && (
                <Fragment>
                    <MainPanel>
                        {showChat && <Chat />}
                        {showTasks && <TaskMenu />}
                    </MainPanel>

                    <SecondaryPanel>
                        {showChat && <TaskMenu />}
                    </SecondaryPanel>
                </Fragment>
            )
        }

        {
            showTasks && (
                <TaskBoard />
            )
        }

    </div>
);

const mapStateToProps = state => ({
	showChat: getChatView(state),
	showTasks: getTasksView(state)
});

export default connect(mapStateToProps)(View);