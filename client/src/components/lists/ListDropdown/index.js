import { connect } from "react-redux";

import React from "react";
import Option from "../../reuse/Option";
import Select from "../../reuse/Select";
import Menu from "../../reuse/Menu";
import MenuItem from "../../reuse/MenuItem";
import { getSelectedChannelLists } from "../duck/selectors";
import styles from "./ListDropdown.scss";
import ListItem from "../../reuse/ListItem";
import Button from "../../reuse/Button";
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