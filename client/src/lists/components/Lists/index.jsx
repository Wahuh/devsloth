import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectListsByBoardId} from '../../redux/selectors';
import {getListsRequest} from '../../redux/actions';
import List from '../List';
import styles from './Lists.module.scss';
import CreateListForm from '../CreateListForm';

const Lists = ({lists, onGetLists, board_id}) => {
  useEffect(() => {
    onGetLists(board_id);
  }, []);
  return (
    <ul className={styles.Lists}>
      {lists.map(list => (
        <List key={list.id} list={list} />
      ))}
      <CreateListForm board_id={board_id} />
    </ul>
  );
};

Lists.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
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
    lists: selectListsByBoardId(state, ownProps.board_id),
  };
};

export default connect(
  mapStateToProps,
  {
    onGetLists: getListsRequest,
  },
)(Lists);
