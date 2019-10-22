import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import {selectBoard} from '../../redux/selectors';
import {getBoardRequest} from '../../redux/actions';
import Lists from '../../../lists/components/Lists';
import styles from './Board.module.scss';
import {moveTaskSameList} from '../../../tasks/redux/actions';

const Board = ({board, match, onGetBoard, onMoveSameList}) => {
  const {board_id} = match.params;
  useEffect(() => {
    onGetBoard({board_id});
  }, []);
  // eslint-disable-next-line
  const handleDragEnd = useCallback(result => {
    const {source, destination} = result;
    if (!destination) return null;
    if (
      source.droppableId === destination.droppableId &&
      source.index !== destination.index
    ) {
      // same list reorder
      onMoveSameList({
        prevIndex: source.index,
        nextIndex: destination.index,
        list_id: destination.droppableId,
      });
    } else {
      // move to another list
    }
  }, []);
  if (!board) return null;

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={styles.Board}>
        <Lists board_id={board_id} />
      </div>
    </DragDropContext>
  );
};

Board.defaultProps = {
  board: null,
};

Board.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({board_id: PropTypes.string}),
  }).isRequired,
  board: PropTypes.shape({
    title: PropTypes.string,
  }),
  onGetBoard: PropTypes.func.isRequired,
  onMoveSameList: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    board: selectBoard(state, ownProps.match.params.board_id),
  };
};

export default connect(
  mapStateToProps,
  {
    onGetBoard: getBoardRequest,
    onMoveSameList: moveTaskSameList,
  },
)(Board);
