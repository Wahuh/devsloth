import { connect } from "react-redux";
import { getSelectedChannelId } from "../../channel/duck/selectors";

import React, { Component } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { arrayMove } from "react-sortable-hoc";
import SortableList from "./VirtualList";
import { getListTasks } from "../duck/selectors";
import styles from "./TaskList.scss";
import { moveTaskRequest } from "../duck/actions";


class TaskList extends Component {
    registerListRef = (listInstance) => {
        this.List = listInstance;
    };

    handleSortEnd = ({ oldIndex, newIndex }) => {
        const { tasks, onMove } = this.props;
        if (oldIndex === newIndex) {
            return;
        }
        const movedId = tasks[oldIndex]._id;
        if (oldIndex > 0) {
            onMove({ 
                beforeOldIndex: { _id: tasks[oldIndex - 1]._id, next: tasks[oldIndex + 1]._id },
                newIndex: { _id: movedId, next: tasks[newIndex + 1]._id },
                beforeNewIndex: { _id: tasks[newIndex]._id, next: movedId }, 
            });
        } else {
            onMove({
                newIndex: { _id: movedId, next: tasks[newIndex + 1]._id },
                beforeNewIndex: { _id: tasks[newIndex]._id, next: movedId }, 
            });
        }
    }

    render() {
        const { tasks } = this.props;

        return tasks ? (
            <div className={styles.ListWrapper}>
                <AutoSizer>
                    {({ height }) => (
                        <SortableList
                            getRef={this.registerListRef}
                            tasks={tasks}
                            height={height}
                            onSortEnd={this.handleSortEnd}
                        />
                    )}
                </AutoSizer>
            </div>
        ) : null;
    }
}

const mapStateToProps = (state, ownProps) => ({
    tasks: getListTasks(state, ownProps._id),
});

export default connect(mapStateToProps, {
    onMove: moveTaskRequest
})(TaskList);