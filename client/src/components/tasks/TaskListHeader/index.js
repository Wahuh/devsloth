import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Input from "../../reuse/Input";
import Typography from "../../reuse/Typography";
import styles from "./TaskListHeader.scss";
import MoreOptionsIcon from "../../reuse/icons/MoreOptionsIcon";
import SearchIcon from "../../reuse/icons/SearchIcon";
import Button from "../../reuse/Button";
import ListDropdown from "../../lists/ListDropdown";
import { updateListRequest } from "../../lists/duck/actions";
import { addUiDropdown, addUiPortal } from "../../ui/duck/actions";
import { DROPDOWN_LIST_OPTIONS } from "../../ui/constants";
import { startQuery, startListQuery, cancelListQuery } from "../../query/duck/actions";
import { getQuery } from "../../query/duck/selectors";
import TaskListHeaderInput from "../TaskListHeaderInput";

const TaskListHeader = ({ list, onEdit, onQuery, onCancel, query }) => {
    const [ isRenaming, setIsRenaming ] = useState(false);
    const [ isSearching, setIsSearching ] = useState(false);
    const [ name, setName ] = useState("");
    const [ isDropdownVisible, setIsDropdownVisible ] = useState(false);
    const [ position, setPosition ] = useState({});

    const handleRename = () => {
        setName(list.name);
        setIsRenaming(true);
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleCancelRename = () => {
        setIsRenaming(false);
        setIsDropdownVisible(false);
    }

    const handleDropdownClose = () => {
        console.log("isclosed?");
        setIsDropdownVisible(false);

    }

    const handleDropdownOpen = event => {

        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({
            x: rect.right, 
            y: rect.top 
        })
        setIsDropdownVisible(true);
    }

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        setName(value);
    }
    const handleSubmit = () => {
        if (name && name !== list.name) {
            onEdit({ name, listId: list._id });
        }
        setIsRenaming(false);
    }

    const handleCancel = () => {
        onCancel({ listId: list._id });
        toggleSearch();
    }

    const handleSearch = ({ currentTarget }) => {
        const { value } = currentTarget;
        onQuery({ query: value, listId: list._id });
    }

    const toggleSearch = () => {
        setIsSearching(!isSearching);
    }

    let header;
    if (isRenaming) {
        header = <TaskListHeaderInput
                    value={name}
                    onBlur={handleSubmit}
                    onChange={handleChange}
                    onCancel={handleCancelRename}
                    onEnter={handleSubmit}
                    name="name"
                />
    } else if (isSearching) {
        header = <TaskListHeaderInput
            value={query}
            onChange={handleSearch}
            onCancel={handleCancel}
            name="search"
        />
    } else {
        header =                 
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
    }
    console.log(isSearching, "state");

    return (
        <section className={styles.TaskListHeader}>
            {header}

            {!isSearching && !isRenaming &&
                <div className={styles.Wrapper} data-tip data-for="ListOptions">

                        <Button onClick={toggleSearch} theme="icon">
                            <SearchIcon />
                        </Button>


                    <div className={styles.RelativeWrapper}>
                        <Button onClick={handleDropdownOpen} theme="icon">
                            <MoreOptionsIcon />
                        </Button>

                        {isDropdownVisible && <ListDropdown onHide={handleDropdownClose} position={position} onRename={handleRename} onClose={handleDropdownClose} />}
                    </div>
                </div>
            }
        </section>
    );
}

const makeMapStateToProps = (initialState, initialProps) => {
    const { listId } = initialProps;
    const mapStateToProps = state => {
        const { lists, query } = state;
        const list = lists.byId[listId];
        return ({ list, query: query.lists[listId] });
    }
    return mapStateToProps;
}

export default connect(makeMapStateToProps, {
    onEdit: updateListRequest,
    onQuery: startListQuery,
    onCancel: cancelListQuery
})(TaskListHeader);