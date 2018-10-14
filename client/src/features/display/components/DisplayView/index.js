import React, { Component } from "react";
import MainPanel from "../../../../layout/MainPanel";
import SecondaryPanel from "../../../../layout/SecondaryPanel";
import ChatPanel from "../../../chat/components/ChatPanel";
import TaskPanel from "../../../tasks/components/TaskPanel";
import "./DisplayView.scss";

class DisplayView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let panel;

        if (this.props.displayChat) {
            panel = <ChatPanel />;
        } else {
            panel = <TaskPanel />;
        }

        return (
            <div className="DisplayView">
                <MainPanel>
                    {panel}
                </MainPanel>

                <SecondaryPanel>
                </SecondaryPanel>
            </div>
        );
    }

}

export default DisplayView;