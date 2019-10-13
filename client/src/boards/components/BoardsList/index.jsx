import React, {useEffect} from 'react';
import BoardItem from '../BoardItem';
import styles from './BoardsList.module.scss';
import AddBoard from '../AddBoard';
import BoardModal from '../BoardModal';
import {connect} from 'react-redux';
import {getBoards} from '../../redux/selectors';
import {getUserId} from '../../../me/redux/selectors';
import {getUserBoardsRequest} from '../../redux/actions';

// const boards = [
//   {title: 'hello', owner_id: 1, id: 2, owner_type: 'user'},
//   {title: 'hello', owner_id: 1, id: 2, owner_type: 'user'},
// ];

const BoardsList = ({match, boards, onGetBoards}) => {
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

const mapStateToProps = state => {
  const boards = getBoards(state, getUserId(state));
  return {
    boards,
  };
};
export default connect(
  mapStateToProps,
  {onGetBoards: getUserBoardsRequest},
)(BoardsList);
