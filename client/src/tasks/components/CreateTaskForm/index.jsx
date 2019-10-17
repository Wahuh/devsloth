import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './CreateTaskForm.module.scss';
import Input from '../../../common/components/Input';
import Button from '../../../common/components/Button';
import Typography from '../../../common/components/Typography';
import {createTaskRequest} from '../../redux/actions';

const CreateTaskForm = ({list_id, onCreateTask}) => {
  const [title, setTitle] = useState('');
  const handleChange = ({currentTarget}) => {
    const {value} = currentTarget;
    setTitle(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title) {
      onCreateTask({list_id, title});
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.CreateTaskForm}>
      <Input
        name="title"
        className={styles.CreateTaskInput}
        value={title}
        onChange={handleChange}
        placeholder="+ add task"
      />
      <Button type="submit" className={styles.CreateTaskButton}>
        <Typography as="span" color="accent">
          Create
        </Typography>
      </Button>
    </form>
  );
};

CreateTaskForm.propTypes = {
  list_id: PropTypes.number.isRequired,
  onCreateTask: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    onCreateTask: createTaskRequest,
  },
)(CreateTaskForm);
