import React from 'react';
import classNames from 'classnames';
import Proptypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({children, type, className, onClick, disabled}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={onClick}
      type={type}
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
  type: 'button',
  onClick: () => {},
};

Button.propTypes = {
  children: Proptypes.node,
  className: Proptypes.string,
  onClick: Proptypes.func,
  disabled: Proptypes.bool,
  type: Proptypes.string,
};

export default Button;
