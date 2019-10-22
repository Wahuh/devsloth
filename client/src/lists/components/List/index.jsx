import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../common/components/Typography';
import styles from './List.module.scss';
import CreateTaskForm from '../../../tasks/components/CreateTaskForm';
import TasksList from '../../../tasks/components/TasksList';

const List = ({list}) => {
  const {title, id} = list;
  return (
    <li className={styles.List}>
      <div className={styles.ListTitle}>
        <Typography
          textAlign="center"
          fontSize={18}
          fontWeight={600}
          color="secondary"
        >
          {title}
        </Typography>
      </div>

      <TasksList list_id={id} />
      <CreateTaskForm list_id={id} />
    </li>
  );
};

List.propTypes = {
  list: PropTypes.shape({title: PropTypes.string, id: PropTypes.number})
    .isRequired,
};

export default List;
