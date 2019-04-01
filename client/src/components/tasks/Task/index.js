import { connect } from "react-redux";
import { addUiPortal } from "../../ui/duck/actions";

import React, { useEffect, useRef } from "react";
import Button from "../../reuse/Button";
import EditIcon from "../../reuse/icons/EditIcon";
import Typography from "../../reuse/Typography";
import styles from "./Task.scss";
import { MODAL_TASK_EDIT, DROPDOWN_TASK } from "../../ui/constants";
import { selectTask } from "../duck/actions";
import useDraggable from "../../dnd/useDraggable";



export const Task = (props) => {
    const { task, onEdit, onSelect, match, index, listId, onDropdown } = props;
    const { _id } = task;

    const [ { isDragging }, ref ] = useDraggable({ 
      draggableId: _id,
      droppableId: listId,
      index
    });
    // useWhyDidYouUpdate("TASK", props);

    function handleDropdown() {
      const rect = ref.current.getBoundingClientRect();
		onDropdown({
			portalProps: {
				taskId: _id,
        position: { x: rect.left + document.documentElement.scrollTop, y: rect.top },
        index 
      },
      portalDuration: 200,
			portalType: DROPDOWN_TASK
		});
    }

    return (
        <li ref={ref} className={styles.Task}>
            <span>
                <Typography color="primary">
                    {task.name}
                </Typography>
            </span>

            <Button onClick={handleDropdown} type="button" className={styles.TaskEditButton}>
                <EditIcon />
            </Button>
        </li>
    )
}

// const onDropdown = () => {
//   onSelect(_id);
//   const clientRect = taskRef.current.getBoundingClientRect()
//   setPosition({ top: clientRect.top + document.documentElement.scrollTop, left: clientRect.left }  );
//   setShowDropdown(true);
// }

const makeMapStateToProps = (initialState, initialProps) => {
    const { taskId } = initialProps;
    const mapStateToProps = state => {
        const { tasks } = state;
        const task = tasks.byId[taskId];
        return ({ task });
    }
    return mapStateToProps;
}


export default connect(makeMapStateToProps, {
    onEdit: () => addUiPortal({ portalType: MODAL_TASK_EDIT }),
    onSelect: selectTask,
    onDropdown: addUiPortal
})(Task)

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