import React from 'react';
import {connect} from 'react-redux';
import Modal from '../../../common/components/Modal';
import {getIsModalOpen} from '../../../ui/redux/selectors';
import {hideModal} from '../../../ui/redux/actions';
import CreateBoardForm from '../CreateBoardForm';

const BoardModal = ({isOpen, onClose}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <CreateBoardForm />
    </Modal>
  );
};

const mapStateToProps = state => ({
  isOpen: getIsModalOpen(state, 'board'),
});

export default connect(
  mapStateToProps,
  {
    onClose: () => hideModal('board'),
  },
)(BoardModal);
