import { connect } from "react-redux";
import React from "react";
import { getUsername } from "../../user/duck/selectors";
import Typography from "../../reuse/Typography";

const TaskBoardUsername = ({ username }) => (
    <Typography type="subheading" color="primary">
        {`${username}'s Tasks`}
    </Typography>
)

const mapStateToProps = state => ({
    username: getUsername(state)
});

export default connect(mapStateToProps)(TaskBoardUsername);