import React from 'react';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './InternalLink.module.scss';

const InternalLink = ({children, to}) => (
  <Link className={styles.InternalLink} to={to}>
    {children}
  </Link>
);

InternalLink.propTypes = {
  children: Proptypes.node.isRequired,
  to: Proptypes.string.isRequired,
};

export default InternalLink;
