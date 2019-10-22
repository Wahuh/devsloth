import React from 'react';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import styles from './InternalLink.module.scss';

const InternalLink = ({children, to, className}) => (
  <Link className={classNames(styles.InternalLink, className)} to={to}>
    {children}
  </Link>
);

InternalLink.defaultProps = {
  className: '',
};

InternalLink.propTypes = {
  className: Proptypes.string,
  children: Proptypes.node.isRequired,
  to: Proptypes.string.isRequired,
};

export default InternalLink;
