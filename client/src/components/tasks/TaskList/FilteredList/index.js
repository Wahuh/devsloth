import { connect } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import VirtualList from "../VirtualList";
import styles from "./FilteredList.scss";

const FilteredTaskList = props => {
    return (
        <div className={styles.ListWrapper}>
            <AutoSizer>
                {({ height }) => (
                    <VirtualList
                        taskIds={taskIds}
                        height={height}
                        listId={listId}
                        // onSortEnd={handleSortEnd}
                        // distance={2}
                    />
                )}
            </AutoSizer>
        </div>
    );
}

export default FilteredTaskList;