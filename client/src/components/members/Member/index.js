import { connect } from "react-redux";
import { getMember, getMemberIsOwner, getMemberIsUser } from "../duck/selectors";

import React from "react";
import ListItem from "../../reuse/ListItem";
import StarIcon from "../../reuse/icons/StarIcon";
import Tooltip from "../../reuse/Tooltip";
import Typography from "../../reuse/Typography";
import styles from "./Member.scss";


const Member = ({ member, isOwner, isUser }) => {
    const { alias } = member;
    return (
        <ListItem tabIndex className={styles.Member}>
            <div className={styles.Alias}>
                <Typography color="primary">
                    {alias}
                </Typography>
            </div>

            <div className={styles.Wrapper}>
                {isOwner &&
                    <div data-tip data-for="OwnerIcon" className={styles.OwnerIcon}>
                        <StarIcon />
                        <Tooltip id="OwnerIcon" message="Group Owner" />
                    </div>
                }
                {isUser && 
                    <div data-tip data-for="UserIcon" className={styles.UserIcon}>
                        <StarIcon />
                        <Tooltip id="UserIcon" message="This is you!" />
                    </div>
                }
            </div>
        </ListItem>
    );
}

const mapStateToProps = (state, ownProps) => ({
    member: getMember(state, ownProps._id),
    isOwner: getMemberIsOwner(state, ownProps._id),
    isUser: getMemberIsUser(state, ownProps._id)
});

export default connect(mapStateToProps)(Member);
