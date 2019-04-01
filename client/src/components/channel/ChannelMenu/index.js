import { connect } from "react-redux";
import React, { useState } from "react";
import styles from "./ChannelMenu.scss";
import Icon from "../../reuse/Icon";
import TaskIcon from "../../reuse/icons/TaskIcon";
import MemberIcon from "../../reuse/icons/MemberIcon";
import classNames from "classnames";
import DragDropProvider from "../../dnd/DragDropProvider";
import { getSelectedChannelId } from "../duck/selectors";
import ChannelMenuTasks from "../ChannelMenuTasks";
import ChannelMemberList from "../ChannelMemberList";
import Typography from "../../reuse/Typography";
import Button from "../../reuse/Button";

const viewComponents = {
    "tasks": ChannelMenuTasks,
    "members": ChannelMemberList
}

const ChannelMenu = ({ channelId }) => {
    const [ view, setView ] = useState("tasks");

    const View = viewComponents[view]

    return (
        <section className={styles.ChannelMenu}>
            <ul className={styles.MenuBar}>
                <li onClick={() => setView("members")} className={classNames(
                    styles.MenuItem,
                    { [styles.Selected]: view === "members" }
                )}>
                    <Button theme="icon">
                        <Icon size="md">
                            <MemberIcon />
                        </Icon>
                    </Button>
                </li>
                <li onClick={() => setView("tasks")} className={
                    classNames(
                        styles.MenuItem, 
                        { [styles.Selected]: view === "tasks" }
                    )
                }>
                    <Button theme="icon">
                        <Icon size="md">
                            <TaskIcon />
                        </Icon>
                    </Button>
                </li>


            </ul>
        
            <section className={styles.ChannelMenuView}>
                <View channelId={channelId} />
            </section>
        </section>  
    );
}

const mapStateToProps = state => ({
    channelId: getSelectedChannelId(state)
});

export default connect(mapStateToProps)(ChannelMenu);