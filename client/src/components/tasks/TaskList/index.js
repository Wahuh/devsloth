import { connect } from "react-redux";

import React, { useState, useEffect, useRef, memo } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import VirtualList from "./VirtualList";
import styles from "./TaskList.scss";
import { moveTaskRequest } from "../duck/actions";
import { makeGetListTaskIdsOrdered } from "../../lists/duck/selectors";
import useDroppable from "../../dnd/useDroppable";
import { getQuery, getListQuery } from "../../query/duck/selectors";

function move(x, from, to) {
	x.splice((to < 0 ? x.length + to : to), 0, x.splice(from, 1)[0]);
}

function arrayMove(x, from, to) {
	x = x.slice();
	move(x, from, to);
	return x;
};
const FIRST_POSITION = 0;

const TaskList = props => {
    const { taskIds, listId } = props;
    useWhyDidYouUpdate("TASKLIST", props);

    return taskIds ? (
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
    ) : null;
}
const makeMapStateToProps = () => {
  const getListTaskIdsOrdered = makeGetListTaskIdsOrdered();
  const mapStateToProps = (state, ownProps) => {
      const query = getListQuery(state, ownProps);
      const taskIds = getListTaskIdsOrdered(state, ownProps);
      if (!query) {
          return ({ taskIds });
      } else {
          return taskIds ? ({
              taskIds: query ? taskIds
              .filter(id => {
                const taskName = state.tasks.byId[id].name;
                return taskName.startsWith(query) || taskName.includes(query)
              }) : taskIds,
          }) : taskIds;
      }
  };
  return mapStateToProps
}



function areEqual(prevProps, nextProps) {
	if (prevProps.taskIds && nextProps.taskIds) {
		if (prevProps.taskIds.length !== nextProps.taskIds.length) {
			return false;
		}

		for(let i = 0; i < nextProps.taskIds.length; i++) {
			if (prevProps.taskIds[i] !== nextProps.taskIds[i]) {
				return false;
			}
		}
		return true;
	}
	return false;
}

export default connect(makeMapStateToProps, {
    onMove: moveTaskRequest
})(memo(TaskList, areEqual));



function useWhyDidYouUpdate(name, props) {
    // Get a mutable ref object where we can store props ...
    // ... for comparison next time this hook runs.
    const previousProps = useRef();
  
    useEffect(() => {
      if (previousProps.current) {
        // Get all keys from previous and current props
        const allKeys = Object.keys({ ...previousProps.current, ...props });
        // Use this object to keep track of changed props
        const changesObj = {};
        // Iterate through keys
        allKeys.forEach(key => {
          // If previous is different from current
          if (previousProps.current[key] !== props[key]) {
            // Add to changesObj
            changesObj[key] = {
              from: previousProps.current[key],
              to: props[key]
            };
          }
        });
  
        // If changesObj not empty then output to console
        if (Object.keys(changesObj).length) {
          console.log('[why-did-you-update]', name, changesObj);
        }
      }
  
      // Finally update previousProps with current props for next hook call
      previousProps.current = props;
    });
  }

// const handleSortEnd = ({ oldIndex: oldPosition, newIndex: newPosition }) => {
//     if (oldPosition === newPosition) {
//         return;
//     }

//     const reordered = arrayMove(taskIds, oldPosition, newPosition);
//     console.log("old", taskIds);
//     console.log("new", reordered);
//     let tasks = [];
    
//     //first to last, last to first OR ANY POSITION TO FIRST
//     const LAST_POSITION = reordered.length - 1;
//     //if first task was moved
//     if (oldPosition == FIRST_POSITION) {
//         //First position is now the head and has a new next
//         tasks.push({ 
//             _id: reordered[FIRST_POSITION], 
//             next: reordered[FIRST_POSITION + 1], 
//             isHead: true
//         });

//         //new task position is no longer the head and has new next
//         tasks.push({ 
//             _id: reordered[newPosition], 
//             next: newPosition == LAST_POSITION ? null : reordered[newPosition + 1], 
//             isHead: false 
//         });

//         //if the new position is NOT directly above first position
//         if (newPosition != (FIRST_POSITION + 1)) {
//             //one before the new position has new next
//             tasks.push({ 
//                 _id: reordered[newPosition - 1], 
//                 next: reordered[newPosition] 
//             });
//         } 
//     } 
//     //if last task was moved
//     else if (oldPosition == LAST_POSITION) {
//        //new last position has no next
//        tasks.push({ _id: reordered[LAST_POSITION], next: null });
//        //moved task new position has new next
//        tasks.push({ 
//            _id: reordered[newPosition], 
//            next: reordered[newPosition + 1]
//         });
//        //update the task before the new position
//        tasks.push({ _id: reordered[newPosition - 1], next: reordered[newPosition] });
//     } else {
//         //new position of moved item has a new next
//         tasks.push({ _id: reordered[newPosition], next: reordered[newPosition + 1] });
//         //one before the old position of moved item has a new next 
//         tasks.push({ _id: reordered[oldPosition - 1], next: reordered[oldPosition] });
//         //one before the new position of moved item has a new next
//         tasks.push({ _id: reordered[newPosition - 1], next: reordered[newPosition] });
//     }

//     onMove(tasks);
// }