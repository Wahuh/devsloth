import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectBoard} from '../../redux/selectors';
import {getBoardRequest} from '../../redux/actions';
import Typography from '../../../common/components/Typography';
import Lists from '../../../lists/components/Lists';
import styles from './Board.module.scss';

const Board = ({board, match, onGetBoard}) => {
  const {board_id} = match.params;
  useEffect(() => {
    onGetBoard({board_id});
  }, []);
  if (!board) return null;
  const {title} = board;
  return (
    <div className={styles.Board}>
      <div className={styles.BoardHeader}>
        <Typography fontWeight={700} fontSize={20} as="h1" color="primary">
          {title}
        </Typography>
      </div>
      <Lists board_id={board_id} />
    </div>
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
