import { connect } from "react-redux";
import { selectGroup } from "../duck/actions";

import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

import ChannelListHeader from "../../channel/ChannelListHeader";
import ChannelList from "../../channel/ChannelList";
import GroupDetails from "../GroupDetails";
import MemberListHeader from "../../members/MemberListHeader";
import MemberList from "../../members/MemberList";
import UserDetails from "../../user/UserDetails";
import { getIsGroupSelected } from "../duck/selectors";
import SideMenuList from "../../layout/SideMenuList";
import Column from "../../reuse/Column";

const Group = ({ isGroupSelected, match }) => (
    isGroupSelected ? (
        <Fragment>
            <GroupDetails />

            <Column flex="1">
                <ChannelListHeader />

                <SideMenuList>
                    <Route path={`${match.path}/channels`} component={ChannelList} />
                </SideMenuList>

                <MemberListHeader />

                <SideMenuList>
                    <MemberList />
                </SideMenuList>
            </Column>

        </Fragment>
    ) : null
)

const mapStateToProps = state => ({
    isGroupSelected: getIsGroupSelected(state),
})

export default connect(mapStateToProps)(Group);