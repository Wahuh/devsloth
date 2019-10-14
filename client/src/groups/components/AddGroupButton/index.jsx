import React from 'react';
import Button from '../../../common/components/Button';
import PlusIcon from '../../../common/components/icons/PlusIcon';
import styles from './AddGroupButton.module.scss';

const AddGroupButton = () => {
  return (
    <Button className={styles.AddGroupButton}>
      <PlusIcon />
    </Button>
  );
};

export default AddGroupButton;
