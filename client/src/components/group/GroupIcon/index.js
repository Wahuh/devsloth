import { connect } from "react-redux";

import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "../../reuse/Typography";
import styles from "./GroupIcon.scss";
import Tooltip from "../../reuse/Tooltip";
import { getGroup } from "../duck/selectors";
import { getSelectedChannelId, getDefaultChannelId } from "../../channel/duck/selectors";
import { selectGroup } from "../duck/actions";

const GroupIcon = ({ group, onSelect }) => {
    const { _id, name } = group;
    return (
        <div className={styles.Wrapper}>
            <div data-tip data-for={`GroupIcon ${_id}`}>
                <NavLink to={`/${_id}`}
                    className={styles.GroupIcon} 
                    activeClassName={styles.Active}
                    onClick={event => {
                        event.preventDefault();
                        onSelect(_id);
                    }}
                >
                    <Typography color="primary" bold>
                        {name.charAt(0)}
                    </Typography>
                </NavLink>

                <Tooltip id={`GroupIcon ${_id}`} place="right" message={name} />
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    group: getGroup(state, ownProps._id)
});

export default connect(mapStateToProps, {
    onSelect: selectGroup
})(GroupIcon);