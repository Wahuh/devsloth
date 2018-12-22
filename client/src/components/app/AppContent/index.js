import React from "react";
import { Route } from "react-router-dom";
import Header from "../../layout/Header";
import Content from "../../layout/Content";
import View from "../../view/View";
import ViewSwitcher from "../../view/ViewSwitcher";
import ThemeSwitcher from "../../ui/ThemeSwitcher";

import SideMenu from "../../layout/SideMenu";
import SideMenuLeft from "../../layout/SideMenuLeft";
import SideMenuRight from "../../layout/SideMenuRight";

import GroupList from "../../group/GroupList";
import GroupDetails from "../../group/GroupDetails";

import ChannelList from "../../channel/ChannelList";

import MemberList from "../../members/MemberList";
import UserDetails from "../../user/UserDetails";
import ModalRoot from "../../ui/ModalRoot";
import styles from "./AppContent.scss";

const AppContent = () => (
    <div className={styles.AppContent}>
        <SideMenu>
            <SideMenuLeft>
                <GroupList />
            </SideMenuLeft>

            <SideMenuRight fixedComponent={<UserDetails />}>
                <GroupDetails />
                <ChannelList />
                <MemberList />
                
            </SideMenuRight>
        </SideMenu>

        <Content>
            <Header>
                <ViewSwitcher />
                <ThemeSwitcher />
            </Header>
            <View />
        </Content>
        
        <ModalRoot />
    </div>
);

export default AppContent;