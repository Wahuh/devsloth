import { connect } from "react-redux";
import React, { useEffect, useState, Fragment } from "react";
import TaskListHeader from "../../tasks/TaskListHeader";
import ListSelect from "../../lists/ListSelect";
import ChannelMenuList from "../ChannelMenuList";
import TaskList from "../../tasks/TaskList";
import TaskCreateForm from "../../tasks/TaskCreateForm";
import { getChannelListIds } from "../../lists/duck/selectors";

const ChannelMenuTasks = ({ listIds, channelId }) => {
    const [ listId, setListId ] = useState("");

    useEffect(() => {
        if (listIds && listIds.length > 0) {
            setListId(listIds[0]);
        } else {
            setListId("");
        }
    }, [ listIds ]);

    return (
        <Fragment>
            {listIds && <ListSelect onSelect={setListId} value={listId} listIds={listIds} />}
            {listId && 
                <ChannelMenuList>
                    <TaskListHeader listId={listId} />
                    <TaskList listId={listId} />
                    <TaskCreateForm channelId={channelId} listId={listId} />
                </ChannelMenuList>
            }
        </Fragment>
    );
}

const mapStateToProps = state => ({
    listIds: getChannelListIds(state),
});

export default connect(mapStateToProps)(ChannelMenuTasks);