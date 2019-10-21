import React, {useEffect} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectTasksByListId} from '../../redux/selectors';
import styles from './TasksList.module.scss';
import TaskItem from '../TaskItem';
import {getTasksRequest} from '../../redux/actions';

const TasksList = ({tasks, onGetTasks, list_id}) => {
  useEffect(() => {
    onGetTasks({list_id});
  }, []);
  if (!tasks.length) return null;
  return (
    /* eslint-disable */
    <Droppable droppableId={list_id.toString()}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={styles.ListWrapper}
        >
          <ul className={styles.TasksList}>
            {tasks.map((task, index) => (
              <TaskItem key={task.id} index={index} task={task} />
            ))}
          </ul>
        </div>
      )}
    </Droppable>
    /* eslint-enable */
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf({id: PropTypes.number, title: PropTypes.string}),
  ).isRequired,
  onGetTasks: PropTypes.func.isRequired,
  list_id: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  tasks: selectTasksByListId(state, ownProps.list_id),
});

export default connect(
  mapStateToProps,
  {
    onGetTasks: getTasksRequest,
  },
)(TasksList);
