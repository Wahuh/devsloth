import React, {useEffect} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {connect} from 'react-redux';
import {getBoard} from '../../redux/selectors';
import {getBoardRequest} from '../../redux/actions';
import Typography from '../../../common/components/Typography';

const Board = ({board, match, onGetBoard}) => {
  const {board_id} = match.params;
  useEffect(() => {
    onGetBoard({board_id});
  }, []);
  if (!board) return null;
  const {title} = board;
  return (
    // <DragDropContext>
    <Typography fontWeight={700} fontSize={24} as="h1" color="primary">
      {title}
    </Typography>
  ); // </DragDropContext>
};

const mapStateToProps = (state, ownProps) => ({
  board: getBoard(state, ownProps.match.params.board_id),
});

export default connect(
  mapStateToProps,
  {
    onGetBoard: getBoardRequest,
  },
)(Board);
