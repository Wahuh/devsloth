import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import styles from "./ChannelMenu.scss";
import Icon from "../../reuse/Icon";
import TaskIcon from "../../reuse/icons/TaskIcon";
import { getChannelListIds } from "../../lists/duck/selectors";
import TaskListHeader from "../../tasks/TaskListHeader";
import TaskList from "../../tasks/TaskList";
import TaskCreateForm from "../../tasks/TaskCreateForm";
import ListSelect from "../../lists/ListSelect";
import ChannelMenuList from "../ChannelMenuList";
import MemberIcon from "../../reuse/icons/MemberIcon";
import DragDropProvider from "../../dnd/DragDropProvider";
import { getSelectedChannelId } from "../duck/selectors";

const ChannelMenu = ({ listIds, channelId }) => {
    const [ listId, setListId ] = useState("");
    useEffect(() => {
        if (listIds && listIds.length > 0) {
            setListId(listIds[0]);
        } else {
            setListId("");
        }
    }, [ listIds ]);
    return (
        <section className={styles.ChannelMenu}>
            <ul className={styles.MenuBar}>
                <li className={styles.MenuItem}>
                    <Icon size="md">
                        <TaskIcon />
                    </Icon>
                </li>

                <li className={styles.MenuItem}>
                    <Icon size="md">
                        <MemberIcon />
                    </Icon>
                </li>
            </ul>
            

                <section className={styles.ChannelMenuView}>
                    {listIds && <ListSelect onSelect={setListId} value={listId} listIds={listIds} />}
                    {listId && 
                        <ChannelMenuList>
                            <TaskListHeader listId={listId} />
                            <TaskList listId={listId} />
                            <TaskCreateForm channelId={channelId} listId={listId} /> 
                        </ChannelMenuList>
                    }
                </section>
        </section>  
    );
}
//            <DragDropProvider>
const mapStateToProps = state => ({
    listIds: getChannelListIds(state),
    channelId: getSelectedChannelId(state)
});

export default connect(mapStateToProps)(ChannelMenu);