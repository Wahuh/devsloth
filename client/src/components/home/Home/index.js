import React from "react";
import { Route } from "react-router-dom";

import Column from "../../reuse/Column";
import InviteList from "../../invites/InviteList";
import Me from "../Me";

const Home = ({ match }) => (
    <Column maxWidth maxHeight justifyContent="center" alignItems="center">
        <Route exact path={`${match.path}`} component={Me} />
        <Route exact path={`${match.path}/invites`} component={InviteList} />
    </Column>
);

export default Home;