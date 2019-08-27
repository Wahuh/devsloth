import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../Input';
import styles from './TextInput.module.scss';
import TickIcon from '../icons/TickIcon';

const TextInput = ({onChange, label, name, type, value, error}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if (!value) {
      setIsFocused(!isFocused);
    }
  };

  return (
    <div
      className={classNames(styles.TextInput, {
        [styles.focused]: isFocused,
        [styles.valid]: value && !error,
      })}
    >
      <label className={styles.Label} htmlFor={name}>
        {label}
        <span className={styles.Indicator}>{<TickIcon />}</span>
      </label>
      <Input
        name={name}
        onBlur={handleFocus}
        onChange={onChange}
        onFocus={handleFocus}
        type={type}
        value={value}
        className={styles.Input}
      />
    </div>
  );
};

TextInput.defaultProps = {
  type: 'text',
  error: '',
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default TextInput;
