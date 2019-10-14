import React from 'react';
import {Link} from 'react-router-dom';
import styles from './MeLink.module.scss';
import SideNavigationItem from '../../../app/components/SideNavigationItem';

const MeLink = () => {
  return (
    <SideNavigationItem>
      <Link className={styles.MeLink} to="/@me">
        hello
      </Link>
    </SideNavigationItem>
  );
};

export default MeLink;
