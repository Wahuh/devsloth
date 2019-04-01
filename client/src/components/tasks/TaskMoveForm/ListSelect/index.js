import { connect } from "react-redux";

import React, { useState, useEffect } from "react";
import styles from "./ListSelect.scss";
import Option from "../../../reuse/Option";
import FloatSelect from "../../../reuse/FloatSelect";
import { getChannelLists, getListTaskCount } from "../../../lists/duck/selectors";

const ListSelect = ({ lists, newIndex, listId, onListIdChange, onIndexChange, taskCount }) => {
    useEffect(() => {
        //when channel changes, change selected list id
        onListIdChange({ currentTarget: { value: lists[0]._id } });
    }, [ lists ]);
    
    console.log("listid", listId)
    console.log(taskCount, "taskcount")
    return (
        <div className={styles.ListSelect}> 
            <FloatSelect onChange={onListIdChange} value={listId} label="List">
                {lists.map(({ _id, name }) => <Option value={_id}>{name}</Option>)}
            </FloatSelect>

            <FloatSelect onChange={onIndexChange} value={newIndex} label="Position">
                {Array.from({ length: taskCount + 1 || 1 }, (_, i) => i).map(n => <Option value={n}>{n + 1}</Option>)}
            </FloatSelect>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    lists: getChannelLists(state, ownProps),
    taskCount: getListTaskCount(state, ownProps)
});

export default connect(mapStateToProps)(ListSelect);