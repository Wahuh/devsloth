import { connect } from "react-redux";

import React, { Component } from "react";
import "./TaskMenu.scss";
import TaskList from "../TaskList";
import styles from "./TaskMenu.scss";
import { getListIds } from "../../lists/duck/selectors";
import { createListRequest } from "../../lists/duck/actions";
import TaskListHeader from "../TaskListHeader";
import Button from "../../reuse/Button";
import TaskListButton from "../TaskListButton";
import ListDropdown from "../../lists/ListDropdown";

class TaskMenu extends Component {
    state = { 
        _id: null,
    }

    componentDidMount() {
        const { listIds } = this.props;
        if (listIds.length > 0) {
            this.setState({ _id: listIds[0] });
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.listIds && this.props.listIds !== prevProps.listIds) {
            this.setState({ _id: lists[0]._id, name: lists[0].name });
        }
    }

    selectList = _id => {
        this.setState({ _id });
    }

    render() {
        const { listIds } = this.props;
        const { _id } = this.state;
        return (
            <div className={styles.TaskMenu}>

                <div className={styles.ListNames}>
                    {listIds.map(id => <TaskListButton onClick={() => this.selectList(id)} _id={id} selected={_id === id} />)}
                </div>



                <div className={styles.TaskMenuList}>
                    {_id && <TaskList listId={_id} />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listIds: getListIds(state)
});

export default connect(mapStateToProps, {
    onAddList: createListRequest,
})(TaskMenu);