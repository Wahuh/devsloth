import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Typography from '../Typography';
import styles from './SubmitButton.module.scss';
import Spinner from '../Spinner';

const SubmitButton = ({isFormValid, text, isFetching}) => (
  <Button type="submit" disabled={!isFormValid} className={styles.SubmitButton}>
    {isFetching ? (
      <Spinner />
    ) : (
      <Typography color="complement" as="span">
        {text}
      </Typography>
    )}
  </Button>
);

SubmitButton.defaultProps = {
  isFormValid: false,
  isFetching: false,
};

SubmitButton.propTypes = {
  isFormValid: PropTypes.bool,
  text: PropTypes.string.isRequired,
  isFetching: PropTypes.bool,
};

export default SubmitButton;
