import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideNavigation.module.scss';

const SideNavigation = ({children}) => {
  return <nav className={styles.SideNavigation}>{children}</nav>;
};

SideNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideNavigation;
