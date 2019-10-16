import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectBoardLists} from '../../redux/selectors';
import {getListsRequest} from '../../redux/actions';

const Lists = ({lists, onGetLists, board_id}) => {
  useEffect(() => {
    onGetLists(board_id);
  }, []);
  return <ul>{lists.map(list => list.title)}</ul>;
};

Lists.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.number,
      title: PropTypes.string,
      board_id: PropTypes.number,
    }),
  ).isRequired,
  onGetLists: PropTypes.func.isRequired,
  board_id: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    lists: selectBoardLists(state, ownProps.board_id),
  };
};

export default connect(
  mapStateToProps,
  {
    onGetLists: getListsRequest,
  },
)(Lists);
