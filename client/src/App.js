import React, { Component } from 'react';
import Header from "./layout/Header";
import Content from "./layout/Content";
import NavBar from "./features/navigation/NavBar";
import SideMenu from "./layout/SideMenu";
import GroupContainer from "./features/group/GroupContainer";
import ViewContainer from "./features/displayModes/ViewContainer"
import DisplayModeContainer from "./features/displayModes/DisplayModeContainer";
import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //Header is only displayed on mobile devices
        return (
            <div id="App">
                <Header>
                    <NavBar openSideBar={this.openSideMenuMobile} />
                </Header>

                <SideMenu>
                    <GroupContainer />
                    <DisplayModeContainer />
                </SideMenu>

                <Content>
                    <ViewContainer />
                </Content>
            </div>
        )
    }
}

export default App;