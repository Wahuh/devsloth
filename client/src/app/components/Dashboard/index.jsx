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
import Typography from '../../../common/components/Typography';
import BoardTitle from '../../../boards/components/BoardTitle';

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
        <Header>
          <Route
            path="/@me/boards"
            exact
            render={() => (
              <Typography
                fontWeight={600}
                fontSize={18}
                as="h1"
                color="primary"
              >
                My Boards
              </Typography>
            )}
          />
          <Route path="/@me/boards/:board_id" component={BoardTitle} />
        </Header>
        <Route path="/@me" component={Me} />
      </div>
    </div>
  );
};

export default Dashboard;
