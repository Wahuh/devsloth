import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectBoard} from '../../redux/selectors';
import {getBoardRequest} from '../../redux/actions';
import Typography from '../../../common/components/Typography';
import CreateListForm from '../../../lists/components/CreateListForm';
import Lists from '../../../lists/components/Lists';

const Board = ({board, match, onGetBoard}) => {
  const {board_id} = match.params;
  useEffect(() => {
    onGetBoard({board_id});
  }, []);
  if (!board) return null;
  const {title} = board;
  return (
    <>
      <Typography fontWeight={700} fontSize={24} as="h1" color="primary">
        {title}
      </Typography>

      <CreateListForm board_id={board_id} />
      <Lists board_id={board_id} />
    </>
  ); // </DragDropContext>
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
  },
)(Board);
