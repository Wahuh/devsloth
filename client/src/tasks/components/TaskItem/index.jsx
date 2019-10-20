import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskItem.module.scss';
import Typography from '../../../common/components/Typography';

const TaskItem = ({task}) => {
  const {title} = task;
  return (
    <li className={styles.TaskItem}>
      <Typography as="p" color="secondary">
        {title}
      </Typography>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({title: PropTypes.string}).isRequired,
};

export default TaskItem;
