import React, { Component, Fragment, useState } from "react";
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

const TaskListHeader = ({ list }) => {
    const [ isRenaming, setIsRenaming ] = useState(false);
    const [ name, setName ] = useState("");
    const [ isDropdownVisible, setIsDropdownVisible ] = useState(false);

    const handleRename = () => {
        setName(list.name);
        setIsRenaming(true);
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        setName(value);
    }
    const handleSubmit = () => {
        const { onEdit } = this.props;
        if (name && name !== list.name) {
            onEdit({ name, listId: list._id });
        }
        setIsRenaming(false);
    }

    return (
        <section className={styles.TaskListHeader}>
            {isRenaming ? (
                <Input
                    autoFocus
                    className={styles.TaskListHeaderInput}
                    type="text"
                    value={name}
                    onBlur={handleSubmit}
                    onEnter={handleSubmit}
                    onChange={handleChange}
                    name="name"
                />
            ) : (
                <Fragment>
                    <Typography type="subheading" color="secondary">
                        {list.name}
                    </Typography>
                        
                    {list.tasks && (list.tasks.length > 0 && 
                    <div className={styles.TaskCount}>
                        <Typography type="caption" color="quaternary">
                            {list.tasks.length}
                        </Typography>
                    </div>) 
                    }
                </Fragment>
            )}
            
            <div className={styles.Wrapper} data-tip data-for="ListOptions">
                {!isRenaming && 
                    <Button onClick={handleDropdown} theme="icon">
                        <SearchIcon />
                    </Button>
                }

                <div className={styles.RelativeWrapper}>
                    <Button onClick={handleDropdown} theme="icon">
                        <MoreOptionsIcon />
                    </Button>

                    {isDropdownVisible && 
                    <ListDropdown 
                        onRename={handleRename}
                        onClose={handleDropdown}
                    />
                }
                </div>
            </div>
        </section>
    );
}

const makeMapStateToProps = (initialState, initialProps) => {
    const { listId } = initialProps;
    const mapStateToProps = state => {
        const { lists } = state;
        const list = lists.byId[listId];
        return ({ list });
    }
    return mapStateToProps;
}

export default connect(makeMapStateToProps, {
    onEdit: updateListRequest
})(TaskListHeader);