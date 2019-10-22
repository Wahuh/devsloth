import React from 'react';
import Typography from '../../../common/components/Typography';
import {connect} from 'react-redux';
import {showModal} from '../../../ui/redux/actions';
import styles from './AddBoard.module.scss';
import Button from '../../../common/components/Button';

const AddBoard = ({onShow}) => {
  return (
    <li>
      <Button className={styles.AddBoard} onClick={onShow}>
        <Typography color="accent">Create board +</Typography>
      </Button>
    </li>
  );
};

export default connect(
  null,
  {onShow: () => showModal('board')},
)(AddBoard);
