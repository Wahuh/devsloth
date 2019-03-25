import { connect } from "react-redux";
import { getIsGroupSelected } from "../duck/selectors";

import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import ChannelList from "../../channel/ChannelList";
import ChannelListHeader from "../../channel/ChannelListHeader";
import GroupDetails from "../GroupDetails";
import MemberList from "../../members/MemberList";
import MemberListHeader from "../../members/MemberListHeader";

import Column from "../../reuse/Column";
import SideMenuList from "../../layout/SideMenuList";

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