import { connect } from "react-redux";
import React from "react";
import { getList } from "../../lists/duck/selectors";
import Button from "../../reuse/Button";
import styles from "./TaskListButton.scss";

const TaskListButton = ({ list, selected, onClick }) => (
    <Button onClick={onClick} className={selected && styles.Selected} theme="outlined" text={list.name} />
);

const mapStateToProps = (state, ownProps) => ({
    list: getList(state, ownProps._id)
});

export default connect(mapStateToProps)(TaskListButton);