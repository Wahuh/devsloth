import React, { useRef } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import TaskList from "../TaskList";
import styles from "./TaskBoard.scss";
import TaskBoardList from "../TaskBoardList";
import TaskListHeader from "../TaskListHeader";
import TaskCreateForm from "../TaskCreateForm";
import ListCreateForm from "../../lists/ListCreateForm";
import DragDropProvider from "../../dnd/DragDropProvider";

export const TaskBoard = ({ listIds, channelId }) => {
    console.log(listIds, "LI")
    const listRef = useRef(null);
    const Column = ({ index, style }) => {
        return (
            <div style={style}>
                {index == listIds.length ?
                    (
                        <ListCreateForm channelId={channelId} />
                    ) : (
                        <TaskBoardList>
                            <TaskListHeader listId={listIds[index]} />
                            <TaskList listId={listIds[index]} />
                            <TaskCreateForm channelId={channelId} listId={listIds[index]} />
                        </TaskBoardList>
                    )
                }
            </div>
        );
    }
    return (
        <div className={styles.TaskBoard}>
            <DragDropProvider>
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
            </DragDropProvider>
        </div>
    );
}