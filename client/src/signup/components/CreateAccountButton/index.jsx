import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/components/Button';
import Typography from '../../../common/components/Typography';
import styles from './CreateAccountButton.module.scss';

const CreateAccountButton = ({isFormValid}) => (
  <Button disabled={!isFormValid} className={styles.CreateAccountButton}>
    <Typography color="complement" as="span">
      Create Account
    </Typography>
  </Button>
);

CreateAccountButton.defaultProps = {
  isFormValid: false,
};

CreateAccountButton.propTypes = {
  isFormValid: PropTypes.bool,
};

export default CreateAccountButton;
