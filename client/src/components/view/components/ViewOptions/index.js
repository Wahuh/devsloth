import React from "react";
import Button from "../../../reuse/Button";
import Typography from "../../../reuse/Typography";
import { func } from "prop-types";
import "./ViewOptions.scss";

const ViewOptions = ({ toggleChat, toggleTasks}) => {
    return (
        <div className="ViewOptions">
            <Button className="ToggleChat" onClick={toggleChat}>
                <Typography>Chat</Typography>
            </Button>
            <Button className="ToggleTasks" onClick={toggleTasks}>
                <Typography>Tasks</Typography>
            </Button>
        </div>
    );
}

ViewOptions.propTypes = {
    toggleChat: func.isRequired,
    toggleTasks: func.isRequired,
}

export default ViewOptions;