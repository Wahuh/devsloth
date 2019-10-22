import React from 'react';
import classNames from 'classnames';
import {Draggable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styles from './TaskItem.module.scss';
import Typography from '../../../common/components/Typography';

const TaskItem = ({task, index}) => {
  const {title, id} = task;
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          /* eslint-disable */
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          /* eslint-enable */
          ref={provided.innerRef}
          className={classNames(styles.TaskItem, {
            [styles.Dragging]: snapshot.isDragging,
          })}
        >
          <Typography as="p" color="secondary">
            {title}
          </Typography>
        </li>
      )}
    </Draggable>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({title: PropTypes.string, id: PropTypes.number})
    .isRequired,
  index: PropTypes.number.isRequired,
};

export default TaskItem;
