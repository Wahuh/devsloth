import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideNavigationItem.module.scss';

const SideNavigationItem = ({children}) => {
  return (
    <li className={styles.SideNavigationItem}>
      <span className={styles.Circle}>{children}</span>
    </li>
  );
};

SideNavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideNavigationItem;
