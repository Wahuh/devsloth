import React, {useState} from 'react';
import {string, object, reach} from 'yup';
import TextInput from '../../../common/components/TextInput';
import SubmitButton from '../../../common/components/SubmitButton';
import styles from './CreateBoardForm.module.scss';
import {createUserBoardRequest} from '../../redux/actions';
import {connect} from 'react-redux';

const schema = object().shape({
  title: string().required('Email address is required'),
});

const CreateBoardForm = ({onCreateBoard}) => {
  const [state, setState] = useState({
    board: {
      title: '',
    },
    error: {
      title: null,
    },
    isFormValid: false,
  });

  const {board, error, isFormValid} = state;

  const handleSubmit = e => {
    e.preventDefault();
    onCreateBoard(board);
  };

  const handleChange = async e => {
    const {name, value} = e.currentTarget;
    try {
      await reach(schema, name).validate(value);
      schema
        .validate({...board, [name]: value})
        .then(() => {
          setState({
            board: {...board, [name]: value},
            error: {...error, [name]: ''},
            isFormValid: true,
          });
        })
        .catch(() => {
          setState({
            board: {...board, [name]: value},
            error: {...error, [name]: ''},
            isFormValid: false,
          });
        });
    } catch (err) {
      setState({
        board: {...board, [name]: value},
        error: {...error, [name]: err.message},
        isFormValid: false,
      });
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.CreateBoardForm}
    >
      <TextInput
        autoFocus
        name="title"
        value={board.title}
        onChange={handleChange}
        label="Board Title"
        error={error.title}
        placeholder="Add board title"
      />
      <SubmitButton text="Create Board" isFormValid={isFormValid} />
    </form>
  );
};

export default connect(
  null,
  {
    onCreateBoard: createUserBoardRequest,
  },
)(CreateBoardForm);
