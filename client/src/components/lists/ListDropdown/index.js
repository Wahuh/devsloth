import { connect } from "react-redux";

import React from "react";

import { getSelectedChannelLists } from "../duck/selectors";
import styles from "./ListDropdown.scss";
import Dropdown from "../../reuse/Dropdown";
import DropdownItem from "../../reuse/DropdownItem";

const ListDropdown = ({ onRename, onHide, position }) => (
    <Dropdown onHide={onHide} position={position}>
        <DropdownItem onClick={onRename} text="Rename" />
        {/* <DropdownItem text="Delete List" /> */}
    </Dropdown>
)

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ListDropdown);