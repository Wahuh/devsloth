import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideMenu.module.scss';

const SideMenu = ({children}) => {
  return <div className={styles.SideMenu}>{children}</div>;
};

SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideMenu;
