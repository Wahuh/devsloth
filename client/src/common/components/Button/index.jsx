import React from 'react';
import classNames from 'classnames';
import Proptypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({children, className, onClick, disabled}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={classNames(styles.Button, className)}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  className: null,
  disabled: false,
};

Button.propTypes = {
  children: Proptypes.node,
  className: Proptypes.string,
  onClick: Proptypes.func.isRequired,
  disabled: Proptypes.bool,
};

export default Button;
