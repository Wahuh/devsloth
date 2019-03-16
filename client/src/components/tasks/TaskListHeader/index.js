import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import AddButton from "../../reuse/buttons/AddButton";
import Column from "../../reuse/Column";
import Input from "../../reuse/Input";
import Typography from "../../reuse/Typography";
import styles from "./TaskListHeader.scss";
import Tooltip from "../../reuse/Tooltip";
import MoreOptionsIcon from "../../reuse/icons/MoreOptionsIcon";
import SearchIcon from "../../reuse/icons/SearchIcon";
import Button from "../../reuse/Button";
import { getList } from "../../lists/duck/selectors";
import Row from "../../reuse/Row";
import ListDropdown from "../../lists/ListDropdown";
import { updateListRequest } from "../../lists/duck/actions";

class TaskListHeader extends Component {
    state = {
        isRenaming: false,
        isDropdownShown: false,
        list: {
            name: ""
        }
    }

    handleRename = () => {
        const { list } = this.props;
        const { name } = list;
        this.setState(prevProps => ({ 
            isRenaming: true,
            isDropdownShown: !prevProps.isDropdownShown,
            list: { name }
        }));
    }

    handleDropdown = () => {
        this.setState(prevProps => ({ isDropdownShown: !prevProps.isDropdownShown }));
    }

    handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;

        const list = { ...this.state.list };
        list[name] = value;
        this.setState({ list });
    }

    handleSubmit = () => {
        const { list } = this.state;
        const { onEdit } = this.props;
        if (list.name && list.name !== this.props.list.name) {
            onEdit({ ...list, listId: this.props.list._id });
        }
        this.setState({
            isRenaming: false
        });
    }

    render() {
        const { list } = this.props;
        const { isDropdownShown, isRenaming } = this.state;
        let count;
        if (list && list.tasks) {
            if (list.tasks.length > 0) {
                count = <div className={styles.TaskCount}>
                            <Typography type="caption" color="quaternary">
                                {list.tasks.length}
                            </Typography>
                        </div>
            }

        } else {
            count = null;
        }

        return (
            <section className={styles.TaskListHeader}>
                {isRenaming ? (
                    <Input
                        autoFocus
                        className={styles.TaskListHeaderInput}
                        type="text"
                        value={this.state.list.name}
                        onBlur={this.handleSubmit}
                        onEnter={this.handleSubmit}
                        onChange={this.handleChange}
                        name="name"
                    />
                ) : (
                    <Fragment>
                        <Typography type="subheading" color="secondary">
                            {list.name}
                        </Typography>
                            
                        {count}
                    </Fragment>
                )}
                
                <div className={styles.Wrapper} data-tip data-for="ListOptions">
                    {!isRenaming && 
                        <Button onClick={this.handleDropdown} theme="icon">
                            <SearchIcon />
                        </Button>
                    }

                    <div className={styles.RelativeWrapper}>
                        <Button onClick={this.handleDropdown} theme="icon">
                            <MoreOptionsIcon />
                        </Button>

                        {isDropdownShown && 
                        <ListDropdown 
                            onRename={this.handleRename}
                            onClose={this.handleDropdown}
                        />
                    }
                    </div>
  
                    {/* <Tooltip id="ListOptions" message="List Options" /> */}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: getList(state, ownProps)
});

export default connect(mapStateToProps, {
    onEdit: updateListRequest
})(TaskListHeader);