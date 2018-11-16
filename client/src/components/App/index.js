import { connect } from "react-redux";
import React, { Component } from 'react';
import { hideAuthentication } from "../auth/duck/actions";
import { loadInitialUserDataRequest } from "../user/duck/actions";

import api from "../../api";
import Header from "../layout/Header";
import Content from "../layout/Content";
import View from "../view/View";

import SideMenu from "../layout/SideMenu";
import SideMenuLeft from "../layout/SideMenuLeft";
import SideMenuRight from "../layout/SideMenuRight";

import GroupList from "../group/GroupList";
import GroupName from "../group/GroupName";
import GroupModal from "../group/GroupModal";

import ChannelList from "../channel/ChannelList";

import UserList from "../user/UserList";
import Authentication from "../auth/Authentication";

import TaskModal from "../tasks/TaskModal";

// import Content from "../layout/Content";
// import NavBar from "../navigation/NavBar";

// import GroupListContainer from "../group/containers/GroupListContainer";
// //import GroupTitleContainer from "../features/group/GroupTitleContainer";
// import ViewContainer from "../view/containers/ViewContainer";
// import GroupModalContainer from "../group/containers/GroupModalContainer";
// import GroupNameContainer from "../group/containers/GroupNameContainer";
// import ChannelListContainer from "../channel/containers/ChannelListContainer";
// import LoginModalContainer from "../auth/containers/LoginModalContainer";
// import UserListContainer from "../user/containers/UserListContainer";

import styles from "./App.scss";

//disable focus on App element when there is a modal active
class App extends Component {
    componentDidMount() {
        const { hideAuthentication, loadInitialUserDataRequest } = this.props;
        const jwt = api.fetchToken();
        if (jwt) {
            hideAuthentication();
            loadInitialUserDataRequest();
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
    { 
        hideAuthentication,
        loadInitialUserDataRequest 
    }
)(App);