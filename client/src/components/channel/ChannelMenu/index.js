import { connect } from "react-redux";
import React, { useState, Fragment } from "react";
import styles from "./ChannelMenu.scss";
import Icon from "../../reuse/Icon";
import TaskIcon from "../../reuse/icons/TaskIcon";
import { getListIds } from "../../lists/duck/selectors";
import TaskListHeader from "../../tasks/TaskListHeader";
import TaskList from "../../tasks/TaskList";
import TaskCreateForm from "../../tasks/TaskCreateForm";
import ListSelect from "../../lists/ListSelect";
import ChannelMenuList from "../ChannelMenuList";
import MemberIcon from "../../reuse/icons/MemberIcon";

const ChannelMenu = ({ listIds }) => {
    const [ listId, setListId ] = useState("");    
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
                        <TaskCreateForm _id={listId} /> 
                    </ChannelMenuList>
                }
            </section>
        </section>  
    );
}

const mapStateToProps = state => ({
    listIds: getListIds(state)
});

export default connect(mapStateToProps)(ChannelMenu);