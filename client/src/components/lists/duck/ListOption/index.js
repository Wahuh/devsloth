import { connect } from "react-redux";
import React from "react";
import { getListName } from "../selectors";
import Typography from "../../../reuse/Typography";
import Option from "../../../reuse/Option";

const ListOption = ({ listId, name }) => {

    return (
    <Option value={listId}>
        {name}
    </Option>
)};


const mapStateToProps = (state, ownProps) => ({
    name: getListName(state, ownProps)
});

export default connect(mapStateToProps)(ListOption);