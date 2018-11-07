import React from "react";
import MainPanel from "../../../../layout/MainPanel";
import SecondaryPanel from "../../../../layout/SecondaryPanel";
import Chat from "../../../chat/components/Chat";
import TaskMenu from "../../../tasks/components/TaskMenu";
import "./View.scss";

const View = ({ showChat, showTasks }) => {
    return (
        <div className="View">
            <MainPanel>
                {showChat && <Chat />}
                {showTasks && <TaskMenu />}
            </MainPanel>

            <SecondaryPanel>
                {showChat && <TaskMenu />}
            </SecondaryPanel>
        </div>
    );
}

export default View;