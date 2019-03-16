import { connect } from "react-redux";

import React from "react";

import { getSelectedChannelLists } from "../duck/selectors";
import styles from "./ListDropdown.scss";
import Dropdown from "../../reuse/Dropdown";
import DropdownItem from "../../reuse/DropdownItem";

const ListDropdown = ({ onRename, onClose }) => (
    <Dropdown onClose={onClose}>
        <DropdownItem onClick={onRename} text="Rename" />
    </Dropdown>
)

const mapStateToProps = state => ({
    lists: getSelectedChannelLists(state)
});

export default connect(mapStateToProps)(ListDropdown);