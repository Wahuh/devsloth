import React, { Component } from 'react';
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import View from "./components/view/View";

import SideMenu from "./components/layout/SideMenu";
import SideMenuLeft from "./components/layout/SideMenuLeft";
import SideMenuRight from "./components/layout/SideMenuRight";

import GroupList from "./components/group/GroupList";
import GroupName from "./components/group/GroupName";
import GroupModal from "./components/group/GroupModal";

import ChannelList from "./components/channel/ChannelList";

import UserList from "./components/user/UserList";
import Authentication from "./components/auth/Authentication";

// import Content from "./layout/Content";
// import NavBar from "./components/navigation/NavBar";

// 

// import GroupListContainer from "./components/group/containers/GroupListContainer";
// //import GroupTitleContainer from "./features/group/GroupTitleContainer";
// import ViewContainer from "./components/view/containers/ViewContainer";
// import GroupModalContainer from "./components/group/containers/GroupModalContainer";
// import GroupNameContainer from "./components/group/containers/GroupNameContainer";
// import ChannelListContainer from "./components/channel/containers/ChannelListContainer";
// import LoginModalContainer from "./components/auth/containers/LoginModalContainer";
// import UserListContainer from "./components/user/containers/UserListContainer";

import styles from "./App.scss";


class App extends Component {
    render() {
        //Header is only displayed on mobile devices
        return (
            <div id={styles.App}>
                <SideMenu>
                    <SideMenuLeft>
                        <GroupList />
                    </SideMenuLeft>

                    <SideMenuRight>
                        <GroupName />
                        <ChannelList />
                        <UserList />
                    </SideMenuRight>
                </SideMenu>

                <Content>
                    <Header />
                    <View />
                </Content>
                
                <Authentication />
                <GroupModal />
            </div>
        )
    }
}

export default App;

{/* <SideMenu>
<SideMenuLeft>
    <GroupListContainer />
</SideMenuLeft>

<SideMenuRight>
    <GroupNameContainer />
    <ChannelListContainer />
    <UserListContainer />
</SideMenuRight>
</SideMenu>

<Content>
<Header>
    <NavBar />
</Header>
<ViewContainer />
</Content>
<LoginModalContainer />
<GroupModalContainer /> */}