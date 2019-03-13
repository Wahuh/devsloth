import React from "react";
import SideMenu from "../SideMenu";
import SideMenuLeft from "../SideMenuLeft";
import GroupList from "../../group/GroupList";
import SideMenuRight from "../SideMenuRight";
import UserDetails from "../../user/UserDetails";
import MemberListHeading from "../../members/MemberListHeading";
import MemberList from "../../members/MemberList";
import GroupDetails from "../../group/GroupDetails";
import ChannelListHeading from "../../channel/ChannelListHeading";
import ChannelList from "../../channel/ChannelList";
import Content from "../Content";
import Header from "../Header";
import HamburgerButton from "../../ui/HamburgerButton";
import ChannelName from "../../channel/ChannelName";
import IconContainer from "../../reuse/IconContainer";
import ViewSwitcher from "../../view/ViewSwitcher";
import ThemeSwitcher from "../../ui/ThemeSwitcher";
import { Route, Switch } from "react-router-dom";
import Home from "../../home/Home";
import styles from "./AppLayout.scss";
import CloseIcon from "../../reuse/icons/CloseIcon";
import Column from "../../reuse/Column";

const AppLayout = ({ children }) => (
    <div className={styles.AppLayout}>
        <SideMenu>
            <SideMenuLeft>
                <GroupList />
            </SideMenuLeft>

            <SideMenuRight 

            />
        </SideMenu>

        <Content>
            <Header>
                <HamburgerButton />
                <ChannelName />
                <IconContainer>
                    <ViewSwitcher />
                    <ThemeSwitcher />
                </IconContainer>
            </Header>
            {children}
        </Content>

    </div>

)

export default AppLayout;