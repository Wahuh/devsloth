import { connect } from "react-redux";
import { getChannelListIds } from "../../lists/duck/selectors";

import React, { useRef } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import TaskList from "../TaskList";
import styles from "./TaskBoard.scss";
import TaskBoardList from "../TaskBoardList";
import TaskListHeader from "../TaskListHeader";
import TaskCreateForm from "../TaskCreateForm";
import ListCreateForm from "../../lists/ListCreateForm";

const TaskBoard = ({ listIds }) => {
    const listRef = useRef(null);
    const Column = ({ index, style }) => {
        return (
            <div style={style}>
                {index == listIds.length ?
                    (
                        <ListCreateForm />
                    ) : (
                        <TaskBoardList>
                            <TaskListHeader listId={listIds[index]} />
                            <TaskList listId={listIds[index]} />
                            <TaskCreateForm listId={listIds[index]} />
                        </TaskBoardList>
                    )
                }
            </div>
        );
    }
    return (
        <div className={styles.TaskBoard}>
            <span className={styles.Lists}>
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            ref={listRef}
                            width={width}
                            itemCount={listIds.length + 1}
                            height={height}
                            itemSize={312}
                            layout="horizontal"
                            className={styles.List}
                        >
                            {Column}
                        </List>
                    )}
                </AutoSizer>
            </span>
        </div>
    );
}

const mapStateToProps = state => ({
    listIds: getChannelListIds(state)
});

export default connect(mapStateToProps)(TaskBoard);