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
  onEnter,
  onFocus,
  onKeyPress,
  placeholder,
  type,
  value,
}) => {
  function handleEnterPress(event) {
    if (event.defaultPrevented) {
      return; // Should do nothing if the default action has been cancelled
    }
    let handled = false;
    if (event.key !== undefined) {
      if (event.key === 'Enter') {
        onEnter();
        handled = true;
      } else if (onKeyPress) {
        onKeyPress();
      }
    } else if (event.keyCode !== undefined) {
      if (event.keyCode === 13) {
        onEnter();
        handled = true;
      } else if (onKeyPress) {
        onKeyPress();
      }
    }

    if (handled) {
      event.preventDefault();
    }
  }

  return (
    <input
      // eslint-disable-next-line
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
      onKeyPress={handleEnterPress}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

Input.defaultProps = {
  autoComplete: false,
  autoFocus: false,
  className: '',
  min: null,
  max: null,
  onBlur: () => {},
  onChange: () => {},
  onEnter: () => {},
  onFocus: () => {},
  onKeyPress: () => {},
  placeholder: '',
  type: 'text',
};

Input.propTypes = {
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
