import React, { Component } from "react";
import { VariableSizeList as List } from 'react-window';
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import styles from "./VirtualList.scss";
import taskStyles from "../../Task/Task.scss";
import Task from "../../Task";
import isEqual from "lodash.isequal";

const measure = document.getElementById("measure");

const SortableItem = SortableElement(({ style, task }) => {
    return (
        <div style={style}>
            <Task task={task} />
        </div>
    );
});


class VirtualList extends Component {
    listRef = React.createRef();

    componentDidUpdate(prevProps) {
        const { tasks } = this.props;

        if (!isEqual(tasks, prevProps.tasks)) {
            this.listRef.current.resetAfterIndex(0, true);
            if (tasks.length != prevProps.tasks.length) {
                this.listRef.current.scrollToItem(tasks.length - 1);
            }
        }
    }

    getItemSize = index => {
        const text = document.createElement("p");
        text.classList.add(taskStyles.TextMock);
        text.innerHTML = this.props.tasks[index].name;
        measure.appendChild(text);
        const height = text.clientHeight;
        measure.innerHTML = "";
        return height + 18;
    }

    Row = ({ index, style }) => {
        const { tasks } = this.props;
        return (
            <SortableItem index={index} style={style} task={tasks[index]} />
        );
    };

    render() {
        const { 
            height,
            tasks
        } = this.props;
        console.log("virutal", tasks);
        return (
            <List 
                ref={this.listRef}
                width={280}
                height={height}
                itemSize={this.getItemSize}
                itemCount={tasks.length}
                className={styles.Scroller}
            >
                {this.Row}
            </List>
        );
    }
}

export default SortableContainer(VirtualList);