import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideBar.module.scss';

const SideBar = ({children}) => {
  return <div className={styles.SideBar}>{children}</div>;
};

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideBar;
