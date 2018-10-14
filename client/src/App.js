import React, { Component } from 'react';
import Header from "./layout/Header";
import Content from "./layout/Content";
import NavBar from "./features/navigation/NavBar";
import SideMenu from "./layout/SideMenu";
import SideMenuList from "./layout/SideMenuList";
import SideMenuPanel from "./layout/SideMenuPanel";
import SideMenuButton from "./layout/SideMenuButton";
import GroupListContainer from "./features/group/containers/GroupListContainer";
//import GroupTitleContainer from "./features/group/GroupTitleContainer";
import DisplayViewContainer from "./features/display/containers/DisplayViewContainer";
import GroupModalContainer from "./features/group/containers/GroupModalContainer";
import GroupNameContainer from "./features/group/containers/GroupNameContainer";
import ChannelListContainer from "./features/chat/containers/ChannelListContainer";

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
                    <SideMenuList>
                        <GroupListContainer />
                    </SideMenuList>

                    <SideMenuPanel>
                        <GroupNameContainer />
                        <ChannelListContainer />
                    </SideMenuPanel>
                </SideMenu>

                <Content>
                    <Header>
                        <NavBar />
                    </Header>
                    <DisplayViewContainer />
                </Content>
                <GroupModalContainer />
            </div>

        )
    }
}

export default App;