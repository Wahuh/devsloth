import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectBoardLists} from '../../redux/selectors';

const Lists = ({lists}) => {
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
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, selectBoardLists(state, ownProps.board_id));
  return {
    lists: selectBoardLists(state, ownProps.board_id),
  };
};

export default connect(mapStateToProps)(Lists);
