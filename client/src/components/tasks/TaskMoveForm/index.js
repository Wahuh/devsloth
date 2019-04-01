import { connect } from "react-redux";
import { getAllChannels, getAllChannelsWithLists } from "../../channel/duck/selectors";

import React, { useState, useEffect } from "react";
import Typography from "../../reuse/Typography";
import styles from "./TaskMoveForm.scss";
import Option from "../../reuse/Option";

import FloatSelect from "../../reuse/FloatSelect";
import ListSelect from "./ListSelect";
import Button from "../../reuse/Button";
import { moveTaskRequest } from "../duck/actions";
import Popover from "../../reuse/Popover";

const TaskMoveForm = ({ channels, index, task, onMove, in: inProp, position, onHide }) => {
    const [ channelId, setChannelId ] = useState(task.channel);
    const [ listId, setListId ] = useState(task.list);
    const [ newIndex, setNewIndex ] = useState(index);


    useEffect(() => {
        if (listId === task.list) {
            setNewIndex(index);
        } else {
            setNewIndex(0);
        }
    }, [ listId ])

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        console.log("new channel", value, channelId);
        setChannelId(value);
    }

    const handleListIdChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        console.log(value, "val")
        setListId(value);
    }

    const handleIndexChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        console.log(value, "val")
        setNewIndex(value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("submitting")
        onMove({
            taskId: task._id,
            oldListId: task.list,
            oldChannelId: task.channel,
            oldIndex: index,
            newListId: listId,
            newChannelId: channelId,
            newIndex: parseInt(newIndex),
        });
    }

    return (
        <Popover in={inProp} onHide={onHide} position={position}>
            <form onSubmit={handleSubmit} className={styles.TaskMoveForm} style={{ left: 0, top: "100%", position: "absolute" }}>
                <FloatSelect onChange={handleChange} value={channelId} label="Channel">
                    {channels.map(({ _id, name }) => <Option value={_id}>{name}</Option>)}
                </FloatSelect>

                <ListSelect newIndex={newIndex} onIndexChange={handleIndexChange} onListIdChange={handleListIdChange} listId={listId} channelId={channelId} />

                <Button size="sm" theme="action" text="Move Task" />
            </form>
        </Popover>
    );
}

const mapStateToProps = state => ({
    channels: getAllChannelsWithLists(state),
});

export default connect(mapStateToProps, {
    onMove: moveTaskRequest
})(TaskMoveForm);