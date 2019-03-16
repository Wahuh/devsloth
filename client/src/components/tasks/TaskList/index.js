import { connect } from "react-redux";

import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { arrayMove } from "react-sortable-hoc";
import SortableList from "./VirtualList";
import styles from "./TaskList.scss";
import { moveTaskRequest } from "../duck/actions";
import { makeGetListTaskIdsOrdered } from "../../lists/duck/selectors";


const TaskList = ({ tasks, taskIds, onMove }) => {
    const handleSortEnd = ({ oldIndex, newIndex }) => {
        if (oldIndex === newIndex) {
            return;
        }
        const movedId = taskIds[oldIndex];
        if (oldIndex > 0) {
            onMove({ 
                beforeOldIndex: { _id: taskIds[oldIndex - 1], next: taskIds[oldIndex + 1] },
                newIndex: { _id: movedId, next: taskIds[newIndex + 1] },
                beforeNewIndex: { _id: taskIds[newIndex], next: movedId }, 
            });
        } else {
            onMove({
                newIndex: { _id: movedId, next: tasks[newIndex + 1]._id },
                beforeNewIndex: { _id: tasks[newIndex]._id, next: movedId }, 
            });
        }
    }
    return taskIds ? (
        <div className={styles.ListWrapper}>
            <AutoSizer>
                {({ height }) => (
                    <SortableList
                        taskIds={taskIds}
                        height={height}
                        onSortEnd={handleSortEnd}
                        distance={2}
                    />
                )}
            </AutoSizer>
        </div>
    ) : null;
}

const makeMapStateToProps = () => {
    const getListTaskIdsOrdered = makeGetListTaskIdsOrdered();
    const mapStateToProps = (state, ownProps) => ({
        taskIds: getListTaskIdsOrdered(state, ownProps),
    });
    return mapStateToProps
}

export default connect(makeMapStateToProps, {
    onMove: moveTaskRequest
})(TaskList);