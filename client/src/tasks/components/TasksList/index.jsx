import React, {useEffect} from 'react';
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
  return (
    <ul className={styles.TasksList}>
      {tasks.map(task => (
        <TaskItem task={task} />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf({id: PropTypes.number, title: PropTypes.string}),
  ).isRequired,
  onGetTasks: PropTypes.func.isRequired,
  list_id: PropTypes.string.isRequired,
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
