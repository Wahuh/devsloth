import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {string, object, reach} from 'yup';
import TextInput from '../../../common/components/TextInput';
import SubmitButton from '../../../common/components/SubmitButton';
import styles from './CreateBoardForm.module.scss';
import {createUserBoardRequest} from '../../redux/actions';
import {selectIsFetching} from '../../../ui/redux/selectors';
import {usePrevious} from '../../../common/hooks';
import {hideModal} from '../../../ui/redux/actions';

const schema = object().shape({
  title: string().required('Email address is required'),
});

const CreateBoardForm = ({onCreateBoard, onHideModal, isFetching}) => {
  const [state, setState] = useState({
    board: {
      title: '',
    },
    error: {
      title: null,
    },
    isFormValid: false,
  });

  const prevIsFetching = usePrevious(isFetching);

  useEffect(() => {
    if (!isFetching && prevIsFetching) {
      onHideModal();
    }
  }, [isFetching]);

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
      <SubmitButton
        isFetching={isFetching}
        text="Create Board"
        isFormValid={isFormValid}
      />
    </form>
  );
};

CreateBoardForm.defaultProps = {
  isFetching: false,
};

CreateBoardForm.propTypes = {
  onCreateBoard: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  onHideModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isFetching: selectIsFetching(state, 'postUserBoard'),
});

export default connect(
  mapStateToProps,
  {
    onCreateBoard: createUserBoardRequest,
    onHideModal: () => hideModal('board'),
  },
)(CreateBoardForm);
