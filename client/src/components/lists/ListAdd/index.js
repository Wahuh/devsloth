import React, { Component } from "react";
import styles from "./ListAdd.scss";
import Typography from "../../reuse/Typography";
import PlusIcon from "../../reuse/icons/PlusIcon";
import Icon from "../../reuse/Icon";
import Button from "../../reuse/Button";
import ListCreateForm from "../ListCreateForm";

class ListAdd extends Component {
    state = { 
        edit: false,
        list: {
            name: ""
        },
    };

    handleEdit = () => {
        this.setState(prevState => ({ edit: !prevState.edit }));
    }

    handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        const list = { ...this.state.list };
        list[name] = value;
        this.setState({ list });
    }

    render() {
        const { edit } = this.state;
        return edit ? (
            <ListCreateForm onCancel={this.handleEdit} />
        ) : (
            <Button onClick={this.handleEdit} className={styles.ListAddButton}>
                <Typography bold color="primary">
                    Add another list
                </Typography>

                <Icon size="md">
                    <PlusIcon />
                </Icon>
            </Button>
        );
    }
}

export default ListAdd;