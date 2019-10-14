import React from 'react';
import {Route} from 'react-router-dom';
import SideMenu from '../SideMenu';
import styles from './Dashboard.module.scss';
import SideNavigation from '../SideNavigation';
import MeLink from '../../../me/components/MeLink';
import SideBar from '../SideBar';
import MeMenu from '../../../me/components/MeMenu';
import Header from '../Header';
import Me from '../../../me/components/Me';
import AddGroupButton from '../../../groups/components/AddGroupButton';

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <SideBar>
        <SideNavigation>
          <MeLink />
          <AddGroupButton />
        </SideNavigation>
        <SideMenu>
          <Route path="/@me" component={MeMenu} />
        </SideMenu>
      </SideBar>
      <div className={styles.Panel}>
        <Header>hello</Header>
        <Route path="/@me" component={Me} />
      </div>
    </div>
  );
};

export default Dashboard;
