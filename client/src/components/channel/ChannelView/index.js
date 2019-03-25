import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import MainPanel from "../../layout/MainPanel";
import SecondaryPanel from "../../layout/SecondaryPanel";
import Row from "../../reuse/Row";
import MessageList from "../../messages/MessageList";
import MessageComposer from "../../messages/MessageComposer";
import ChannelMenu from "../ChannelMenu";
import ChannelTaskBoard from "../ChannelTaskBoard";
import MembersTyping from "../../members/MembersTyping";

const ChannelView = ({ match }) => (
    <Row maxHeight maxWidth>
        <Route path={`${match.url}/chat`} render={() => (
            <Fragment>
                <MainPanel>
                    <MessageList />
                    <div style={{ position: "relative", flexShrink: 0, width: "100%" }}>
                        <MessageComposer />
                        <MembersTyping />
                    </div>
                </MainPanel>

                <SecondaryPanel>
                    <ChannelMenu />
                </SecondaryPanel>
            </Fragment>
        )} />
        <Route path={`${match.url}/tasks`} render={() => (
            <MainPanel>
                <ChannelTaskBoard />
            </MainPanel>
        )} />
    </Row>
)


export default ChannelView;