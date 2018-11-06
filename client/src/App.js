import React, { Component } from 'react';
import Header from "./layout/Header";
import Content from "./layout/Content";
import NavBar from "./components/navigation/NavBar";
import SideMenu from "./layout/SideMenu";
import SideMenuRight from "./layout/SideMenuRight";
import SideMenuLeft from "./layout/SideMenuLeft";
import GroupListContainer from "./components/group/containers/GroupListContainer";
//import GroupTitleContainer from "./features/group/GroupTitleContainer";
import ViewContainer from "./components/view/containers/ViewContainer";
import GroupModalContainer from "./components/group/containers/GroupModalContainer";
import GroupNameContainer from "./components/group/containers/GroupNameContainer";
import ChannelListContainer from "./components/channel/containers/ChannelListContainer";
import LoginModalContainer from "./components/auth/containers/LoginModalContainer";
import UserListContainer from "./components/user/containers/UserListContainer";

import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //Header is only displayed on mobile devices
        return (
            <div id="App">
                <SideMenu>
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
                <GroupModalContainer />
            </div>

        )
    }
}

export default App;