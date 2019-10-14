import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './MeMenuItem.module.scss';

const MeMenuItem = ({to, children, exact}) => {
  return (
    <li className={styles.MeMenuItem}>
      <NavLink
        exact={exact}
        className={styles.MenuLink}
        activeClassName={styles.Active}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default MeMenuItem;
