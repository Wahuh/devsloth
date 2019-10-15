import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getBoard} from '../../redux/selectors';
import {getBoardRequest} from '../../redux/actions';
import Typography from '../../../common/components/Typography';
import CreateListForm from '../../../lists/components/CreateListForm';

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

      <CreateListForm />
    </>
  ); // </DragDropContext>
};

Board.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({board_id: PropTypes.string}),
  }).isRequired,
  board: PropTypes.objectOf({
    title: PropTypes.string,
  }).isRequired,
  onGetBoard: PropTypes.func.isRequired,
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
