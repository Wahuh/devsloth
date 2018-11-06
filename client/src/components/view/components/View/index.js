import React from "react";
import MainPanel from "../../../../layout/MainPanel";
import SecondaryPanel from "../../../../layout/SecondaryPanel";
import Chat from "../../../chat/components/Chat";
import TaskPanel from "../../../tasks/components/TaskPanel";
import "./View.scss";

const View = ({ showChat, showTasks }) => {
    return (
        <div className="View">
            <MainPanel>
                {showChat && <Chat />}
                {showTasks && <TaskPanel />}
            </MainPanel>

            <SecondaryPanel>
            </SecondaryPanel>
        </div>
    );
}

export default View;