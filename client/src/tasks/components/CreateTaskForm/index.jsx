import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import styles from './CreateTaskForm.module.scss';
import Input from '../../../common/components/Input';
import Button from '../../../common/components/Button';
import {createTaskRequest} from '../../redux/actions';
import PlusIcon from '../../../common/components/icons/PlusIcon';

const CreateTaskForm = ({list_id, onCreateTask}) => {
  const [title, setTitle] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = ({currentTarget}) => {
    const {value} = currentTarget;
    setTitle(value);
  };

  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title) {
      onCreateTask({list_id, title});
      setTitle('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="new-password"
      className={classNames(styles.CreateTaskForm, {
        [styles.Focused]: isFocused,
      })}
    >
      <Button
        disabled={!title}
        type="submit"
        className={styles.CreateTaskButton}
      >
        <PlusIcon />
      </Button>

      <Input
        autoComplete="off"
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        name="title"
        className={styles.CreateTaskInput}
        value={title}
        onEnter={handleSubmit}
        onChange={handleChange}
        placeholder="add task"
      />
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
