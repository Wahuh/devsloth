import { connect } from "react-redux";


import React, { Component } from "react";
import Input from "../../reuse/Input";
import ActionBar from "../../reuse/ActionBar";
import styles from "./ListCreateForm.scss";
import Button from "../../reuse/Button";
import Row from "../../reuse/Row";
import { getSelectedChannelId } from "../../channel/duck/selectors";
import { createListRequest } from "../duck/actions";

const initialState = {
    list: {
        name: ""
    },
}

class ListCreateForm extends Component {
    state = {
        list: {
            name: ""
        },
    };
    
    handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        const list = { ...this.state.list };
        list[name] = value;
        this.setState({ list });
    }

    handleSubmit = () => {
        event.preventDefault();
        const { onCreateList, channelId } = this.props;

        if (this.state.list.name) {
            onCreateList({ 
                ...this.state.list,
                _id: channelId
            });
            this.setState(initialState)
        }
    }

    render() {
        const { list } = this.state;
        const { onCancel } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className={styles.ListCreateForm}>
                <Input 
                    autoFocus
                    onChange={this.handleChange}
                    value={list.name}
                    type="text"
                    name="name"
                    placeholder="Enter a list name"
                />

                <Row justifyContent="flex-end">
                    <Button onClick={onCancel} text="Cancel" type="button" theme="outlined" size="sm" />
                    <Button text="Add List" theme="action" size="sm" />
                </Row>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    channelId: getSelectedChannelId(state)
});

export default connect(mapStateToProps, {
    onCreateList: createListRequest
})(ListCreateForm);