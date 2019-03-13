import { connect } from "react-redux";

import React from "react";
import List from "../../reuse/List";
import { getInvites } from "../duck/selectors";
import Typography from "../../reuse/Typography";

const InviteList = ({ invites }) => (
    <List>
        {invites.map(invite => (
            <Typography color="primary">
                {invite}
            </Typography> 
        ))}
    </List>
)

const mapStateToProps = state => ({
    invites: getInvites(state)
});

export default connect(mapStateToProps)(InviteList);