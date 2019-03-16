import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import MainPanel from "../../layout/MainPanel";
import SecondaryPanel from "../../layout/SecondaryPanel";
import TaskBoard from "../../tasks/TaskBoard";
import Row from "../../reuse/Row";
import MessageList from "../../chat/MessageList";
import MessageComposer from "../../chat/MessageComposer";
import ChannelMenu from "../ChannelMenu";

const ChannelView = ({ match }) => (
    <Row maxHeight maxWidth>
        <Route path={`${match.url}/chat`} render={() => (
            <Fragment>
                <MainPanel>
                    <MessageList />
                    <MessageComposer />
                </MainPanel>

                <SecondaryPanel>
                    <ChannelMenu />
                </SecondaryPanel>
            </Fragment>
        )} />
        <Route path={`${match.url}/tasks`} render={() => (
            <MainPanel>
                <TaskBoard />
            </MainPanel>
        )} />
    </Row>
)


export default ChannelView;