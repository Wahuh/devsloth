import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Typography from '../../../common/components/Typography';
import {selectBoard} from '../../redux/selectors';

const BoardTitle = ({board}) => {
  if (!board) return null;
  const {title} = board;
  return (
    <Typography fontWeight={600} fontSize={18} as="h1" color="primary">
      {title}
    </Typography>
  );
};

BoardTitle.propTypes = {
  board: PropTypes.shape({title: PropTypes.string}).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  board: selectBoard(state, ownProps.match.params.board_id),
});

export default connect(mapStateToProps)(BoardTitle);
