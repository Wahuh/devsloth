import { connect } from "react-redux";
import React, { useEffect, useRef } from "react";
import { VariableSizeList as List } from 'react-window';
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import styles from "./VirtualList.scss";
import taskStyles from "../../Task/Task.scss";
import Task from "../../Task";
import { makeGetListTaskNamesOrdered } from "../../../lists/duck/selectors";

const measure = document.getElementById("measure");
measure.classList.add(taskStyles.TextMock);
const text = document.getElementById("text");

const SortableItem = SortableElement(({ style, taskId }) => {
    return (
        <div style={style}>
            <Task taskId={taskId} />
        </div>
    );
});

const VirtualList = ({ taskIds, taskNames, height }) => {
    const listRef = useRef(null);
    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
        } else {
            listRef.current.scrollToItem(taskIds.length - 1);
        }
    }, [taskIds]);

    const getItemSize = index => {
        text.innerHTML = taskNames[index];
        const height = text.clientHeight;
        text.innerHTML = "";
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

export default SortableContainer(
    connect(makeMapStateToProps)(VirtualList)
);