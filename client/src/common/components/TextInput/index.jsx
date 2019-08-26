import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../Input';
import styles from './TextInput.module.scss';

const TextInput = ({onChange, label, name, type, value}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if (!value) {
      setIsFocused(!isFocused);
    }
  };

  return (
    <div
      className={classNames(styles.TextInput, {[styles.focused]: isFocused})}
    >
      <label className={styles.Label} htmlFor={name}>
        {label}
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
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default TextInput;
