import { connect } from "react-redux";
import React, { useEffect, useRef, memo } from "react";
import { VariableSizeList as List } from 'react-window';
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import styles from "./VirtualList.scss";
import taskStyles from "../../Task/Task.scss";
import Task from "../../Task";
import { makeGetListTaskNamesOrdered } from "../../../lists/duck/selectors";
import useDroppable from "../../../dnd/useDroppable";
import { getQuery } from "../../../query/duck/selectors";

const measure = document.getElementById("measure");
measure.classList.add(taskStyles.TextMock);
const text = document.getElementById("text");


function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

const VirtualList = props => {
    const { taskIds, taskNames, height, listId } = props;
    const ref = useRef(null);
    const prevTaskNames = usePrevious(taskNames);
    useWhyDidYouUpdate("VIRTUALTASKLIST", props);


    useEffect(() => {
        if (taskNames && prevTaskNames) {
            if (taskNames.length != prevTaskNames.length) {
                ref.current.resetAfterIndex(0);
            } else {
                let index;
                for (let i = 0; i < taskNames.length; i++) {
                    if(taskNames[i] !== prevTaskNames[i]) {
                        index = i;
                        console.log(taskNames[i], prevTaskNames[i], index);
                        break;
                    }
                }
                if (index) {
                    console.log(index, "INDIA", listId);
    
                }
    
                if (taskNames.length > prevTaskNames.length) {
                    ref.current.scrollToItem(taskNames.length - 1);
                }
            }
        }

    }, [ taskNames, prevTaskNames ])
    // const [ props, ref ] = useDroppable(listId);

    const getItemSize = index => {
        text.innerHTML = taskNames[index];
        const height = text.clientHeight;
        text.innerHTML = "";
        return height + 18;
    }
    const Row = ({ index, style }) => (
        <div style={style}>
            <Task index={index} listId={listId} taskId={taskIds[index]} />
        </div>
    );

    return (
        <List 
            ref={ref}
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

export default connect(makeMapStateToProps)(memo(VirtualList, areEqual));

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

	if (prevProps.taskNames && nextProps.taskNames) {
		if (prevProps.taskNames.length !== nextProps.taskNames.length) {
			return false;
		}

		for(let i = 0; i < nextProps.taskNames.length; i++) {
			if (prevProps.taskNames[i] !== nextProps.taskNames[i]) {
				return false;
			}
		}
		return true;
	}
	return false;
}


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
