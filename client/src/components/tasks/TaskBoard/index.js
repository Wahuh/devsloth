import { connect } from "react-redux";
import { createListRequest } from "../../lists/duck/actions";
import { getSelectedChannelId } from "../../channel/duck/selectors";
import { getListIds } from "../../lists/duck/selectors";

import React, { Component } from "react";
import AddButton from "../../reuse/buttons/AddButton";
import TaskList from "../TaskList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Row from "../../reuse/Row";
import Button from "../../reuse/Button";
import Input from "../../reuse/Input";
import PlusIcon from "../../reuse/icons/PlusIcon";
import Tooltip from "../../reuse/Tooltip";
import styles from "./TaskBoard.scss";
import ListAdd from "../../lists/ListAdd";
import TaskBoardList from "../TaskBoardList";
import TaskListHeader from "../TaskListHeader";
import TaskCreateButton from "../TaskCreateButton";
import TaskCreateForm from "../TaskCreateForm";
import ListCreateForm from "../../lists/ListCreateForm";

const initialState = {
    list: {
        name: ""
    },
    validation: {
        name: {}
    },        
}

class TaskBoard extends Component {
    state = initialState;

    handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        const validation = { ...this.state.validation };
        // const field = this.schema[name];
        // validation[name] = validateField(value, field);

        const list = { ...this.state.list };
        list[name] = value;
        this.setState({ list, validation });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { onAddList, channelId } = this.props;

        onAddList({ 
            ...this.state.list,
            _id: channelId
        });

        this.setState(initialState)
    }

    componentDidUpdate(prevProps) {
        const { listIds } = this.props;
        if (listIds.length !== prevProps.listIds.length) {
            document.getElementById(styles.ScrollTo).scrollIntoView({ behavior: "smooth" });
        }
    }

    addTask = () => {

    }

    handleDragEnd = () => {

    }

    render() {
        const { list } = this.state;
        const { listIds } = this.props;
        return (
            <div className={styles.TaskBoard}>
                {/* <DragDropContext onDragEnd={this.handleDragEnd}> */}
                    {listIds.map(id => 
                        <TaskBoardList>
                            <TaskListHeader listId={id} />
                            <TaskList key={id} listId={id} />
                            <TaskCreateForm _id={id} />
                        </TaskBoardList>
                    )}
                {/* </DragDropContext> */}
                <ListCreateForm />
                <div id={styles.ScrollTo}></div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    channelId: getSelectedChannelId(state),
    listIds: getListIds(state)
});

export default connect(mapStateToProps, {
    onAddList: createListRequest,
})(TaskBoard);