import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.scss';

const Input = ({
  autoFocus,
  autoComplete,
  className,
  min,
  max,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyPress,
  placeholder,
  type,
  value,
}) => {
  return (
    <input
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      className={classNames(styles.Input, className)}
      min={min}
      max={max}
      id={name}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

Input.defaultProps = {
  autoComplete: true,
  className: '',
  min: null,
  max: null,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onKeyPress: () => {},
  placeholder: '',
  type: 'text',
};

Input.propTypes = {
  autoComplete: PropTypes.bool,
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
