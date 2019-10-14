import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Typography from '../Typography';
import styles from './SubmitButton.module.scss';

const SubmitButton = ({isFormValid, text}) => (
  <Button type="submit" disabled={!isFormValid} className={styles.SubmitButton}>
    <Typography color="complement" as="span">
      {text}
    </Typography>
  </Button>
);

SubmitButton.defaultProps = {
  isFormValid: false,
};

SubmitButton.propTypes = {
  isFormValid: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
