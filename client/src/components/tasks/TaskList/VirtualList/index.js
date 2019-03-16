import { connect } from "react-redux";
import React, { useEffect, useRef } from "react";
import { VariableSizeList as List } from 'react-window';
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import styles from "./VirtualList.scss";
import taskStyles from "../../Task/Task.scss";
import Task from "../../Task";
import isEqual from "lodash.isequal";
import { makeGetListTaskIdsOrdered, makeGetListTaskNames, makeGetListTaskNamesOrdered } from "../../../lists/duck/selectors";

const measure = document.getElementById("measure");

const SortableItem = SortableElement(({ style, taskId }) => {
    return (
        <div style={style}>
            <Task taskId={taskId} />
        </div>
    );
});

const VirtualList = ({ taskIds, taskNames, height }) => {
    const listRef = useRef(null);
    useEffect(() => {
        listRef.current.scrollToItem(taskIds.length - 1);
    });

    const getItemSize = index => {
        const text = document.createElement("p");
        text.classList.add(taskStyles.TextMock);
        text.innerHTML = taskNames[index];
        measure.appendChild(text);
        const height = text.clientHeight;
        measure.innerHTML = "";
        return height + 18;
    }
    const Row = ({ index, style }) => (
        <SortableItem index={index} style={style} taskId={taskIds[index]} />
    );

    return (
        <List 
            ref={listRef}
            width={280}
            height={height}
            itemSize={getItemSize}
            itemCount={taskIds.length}
            className={styles.Scroller}
        >
            {Row}
        </List>
    );
};

const makeMapStateToProps = () => {
    const getListTaskNamesOrdered = makeGetListTaskNamesOrdered();
    const mapStateToProps = (state, ownProps) => ({
        taskNames: getListTaskNamesOrdered(state, ownProps),
    });
    return mapStateToProps
}

// if (!isEqual(tasks, prevProps.tasks)) {
//     this.listRef.current.resetAfterIndex(0, true);
//     if (tasks.length != prevProps.tasks.length) {
//         this.listRef.current.scrollToItem(tasks.length - 1);
//     }
// }

export default SortableContainer(
    connect(makeMapStateToProps)(VirtualList)
);