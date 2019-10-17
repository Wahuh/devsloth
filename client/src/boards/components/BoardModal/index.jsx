import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from '../../../common/components/Modal';
import {selectIsModalOpen} from '../../../ui/redux/selectors';
import {hideModal} from '../../../ui/redux/actions';
import CreateBoardForm from '../CreateBoardForm';

const BoardModal = ({isOpen, onClose}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <CreateBoardForm />
    </Modal>
  );
};

BoardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: selectIsModalOpen(state, 'board'),
});

export default connect(
  mapStateToProps,
  {
    onClose: () => hideModal('board'),
  },
)(BoardModal);
