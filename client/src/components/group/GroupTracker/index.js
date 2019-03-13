import React, { Component } from "react";
import { connect } from "react-redux";
import { selectGroup } from "../duck/actions";

class GroupTracker extends Component {
    componentDidUpdate(prevProps) {
        const { match, onSelect } = this.props;
        const { params } = match;
        const { id } = params;
        if (id !== prevProps.match.params.id) {
            onSelect(id);
        }
    }
    render() {
        return null;
    }
}

export default connect(null, {
    onSelect: selectGroup
})(GroupTracker);