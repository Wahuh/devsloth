import React from 'react';
import Button from '../../../common/components/Button';
import Typography from '../../../common/components/Typography';
import styles from './CreateAccountButton.module.scss';

const CreateAccountButton = () => (
  <Button className={styles.CreateAccountButton}>
    <Typography as="span">Create Account</Typography>
  </Button>
);

export default CreateAccountButton;
