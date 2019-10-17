import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BoardItem from '../BoardItem';
import styles from './BoardsList.module.scss';
import AddBoard from '../AddBoard';
import BoardModal from '../BoardModal';
import {selectBoardsByOwnerId} from '../../redux/selectors';
import {getUserId} from '../../../me/redux/selectors';
import {getUserBoardsRequest} from '../../redux/actions';

const BoardsList = ({boards, onGetBoards}) => {
  useEffect(() => {
    onGetBoards();
  }, []);

  return (
    <ul className={styles.BoardsList}>
      {boards.map(board => (
        <BoardItem board={board} />
      ))}
      <AddBoard />
      <BoardModal />
    </ul>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.objectOf({id: PropTypes.number, title: PropTypes.string}),
  ).isRequired,
  onGetBoards: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const boards = selectBoardsByOwnerId(state, getUserId(state));
  return {
    boards,
  };
};
export default connect(
  mapStateToProps,
  {onGetBoards: getUserBoardsRequest},
)(BoardsList);
