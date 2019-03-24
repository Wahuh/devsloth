import { connect } from "react-redux";


import React, { Component } from "react";
import classNames from "classnames";
import Input from "../../reuse/Input";
import ActionBar from "../../reuse/ActionBar";
import styles from "./ListCreateForm.scss";
import Button from "../../reuse/Button";
import Row from "../../reuse/Row";
import { getSelectedChannelId } from "../../channel/duck/selectors";
import { createListRequest } from "../duck/actions";
import Icon from "../../reuse/Icon";
import PlusIcon from "../../reuse/icons/PlusIcon";

const initialState = {

    list: {
        name: ""
    },
}

class ListCreateForm extends Component {
    state = {
        isFocused: false,
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

    handleFocus = () => {
        this.setState(prevProps => ({ isFocused: !prevProps.isFocused }));
    }

    handleSubmit = () => {
        event.preventDefault();
        const { onCreateList, channelId } = this.props;

        if (this.state.list.name) {
            onCreateList({ 
                ...this.state.list,
                _id: channelId || null
            });
            this.setState(initialState)
        }
    }

    render() {
        const { list, isFocused } = this.state;
        return (
            <form
                autoComplete="off"
                onSubmit={this.handleSubmit}
                className={classNames(
                styles.ListCreateForm,
                { [styles.isFocused]: isFocused }
            )}>
                <Icon size="md">
                    <PlusIcon />
                </Icon>
                <Input 
                    onChange={this.handleChange}
                    onEnter={this.handleSubmit}
                    onFocus={this.handleFocus}
                    onBlur={this.handleFocus}
                    className={styles.ListCreateInput}
                    value={list.name}
                    type="text"
                    name="name"
                    placeholder="Add List"
                />
            </form>
        );
    }
}


export default connect(null, {
    onCreateList: createListRequest
})(ListCreateForm);