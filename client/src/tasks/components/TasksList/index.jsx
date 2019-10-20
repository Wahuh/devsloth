import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectTasksByListId} from '../../redux/selectors';
import styles from './TasksList.module.scss';
import TaskItem from '../TaskItem';

const TasksList = ({tasks}) => {
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
};

const mapStateToProps = (state, ownProps) => ({
  tasks: selectTasksByListId(state, ownProps.list_id),
});

export default connect(mapStateToProps)(TasksList);
