import React, {useState} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Input from '../../../common/components/Input';
import styles from './CreateListForm.module.scss';
import {createListRequest} from '../../redux/actions';

const CreateListForm = ({onCreateList, hasNoLists, board_id}) => {
  const [title, setTitle] = useState('');

  const handleChange = ({currentTarget}) => {
    const {value} = currentTarget;
    setTitle(value);
  };

  const handleSubmit = () => {
    onCreateList({board_id, title});
    setTitle('');
  };

  return (
    <Input
      name="title"
      className={classNames(styles.CreateListInput, {
        [styles.Alone]: hasNoLists,
      })}
      onEnter={handleSubmit}
      placeholder="+ add list"
      onChange={handleChange}
      value={title}
    />
  );
};

CreateListForm.propTypes = {
  onCreateList: PropTypes.func.isRequired,
  board_id: PropTypes.string.isRequired,
  hasNoLists: PropTypes.bool.isRequired,
};

export default connect(
  null,
  {
    onCreateList: createListRequest,
  },
)(CreateListForm);
