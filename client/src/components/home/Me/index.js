import { connect } from "react-redux";
import { getHasGroups } from "../../group/duck/selectors";

import React from "react";
import GroupEmpty from "../../group/GroupEmpty";

const Me = ({ hasGroups }) => (
    hasGroups ? null : <GroupEmpty />
)

const mapStateToProps = state => ({
    hasGroups: getHasGroups(state)
});

export default connect(mapStateToProps)(Me);