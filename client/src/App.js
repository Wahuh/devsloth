import { connect } from "react-redux";
import React, { Component } from 'react';
import { hideAuthentication } from "./components/auth/duck/actions";

import api from "./api";
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

import TaskModal from "./components/tasks/TaskModal";

// import Content from "./layout/Content";
// import NavBar from "./components/navigation/NavBar";

// import GroupListContainer from "./components/group/containers/GroupListContainer";
// //import GroupTitleContainer from "./features/group/GroupTitleContainer";
// import ViewContainer from "./components/view/containers/ViewContainer";
// import GroupModalContainer from "./components/group/containers/GroupModalContainer";
// import GroupNameContainer from "./components/group/containers/GroupNameContainer";
// import ChannelListContainer from "./components/channel/containers/ChannelListContainer";
// import LoginModalContainer from "./components/auth/containers/LoginModalContainer";
// import UserListContainer from "./components/user/containers/UserListContainer";

import styles from "./App.scss";

//disable focus on App element when there is a modal active
class App extends Component {
    componentDidMount() {
        const jwt = api.fetchToken();
        if (jwt) {
            this.props.hideAuthentication();
        }
    }

    render() {
        const { showAuthentication } = this.props;

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
                
                {showAuthentication && <Authentication />}
                <GroupModal />
                <TaskModal />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showAuthentication: state.ui.showAuthentication
});

export default connect(mapStateToProps, 
    { hideAuthentication: hideAuthentication }
)(App);