import React from 'react';
import styles from './MeMenu.module.scss';
import MeMenuItem from '../MeMenuItem';

const MeMenu = () => {
  return (
    <ul className={styles.MeMenu}>
      <MeMenuItem exact to="/@me">
        Home
      </MeMenuItem>
      <MeMenuItem to="/@me/boards">Boards</MeMenuItem>
    </ul>
  );
};

export default MeMenu;
