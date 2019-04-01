import { connect } from "react-redux";
import { addUiPortal } from "../../ui/duck/actions";

import React from "react";
import AddButton from "../../reuse/buttons/AddButton";
import styles from "./MemberListHeader.scss";
import Typography from "../../reuse/Typography";
import Tooltip from "../../reuse/Tooltip";
import { MODAL_GROUP_INVITE } from "../../ui/constants";
import { getGroupMembersCount } from "../duck/selectors";

const MemberListHeader = ({ onShowModal, memberCount }) => (
    <div className={styles.MemberListHeader}>
        <Typography color="primary" type="subheading">Members</Typography>
        <div className={styles.MemberCount}>
            <Typography color="tertiary" type="description">{memberCount}</Typography>
        </div>
        <div className={styles.MemberInvite} data-tip data-for="GroupInviteButton">
            <AddButton onClick={onShowModal} />
            <Tooltip id="GroupInviteButton" message="Invite Members" />
        </div>
    </div>
);

const mapStateToProps = state => ({
    memberCount: getGroupMembersCount(state)
});

export default connect(mapStateToProps, {
    onShowModal: () => addUiPortal({ portalType: MODAL_GROUP_INVITE }),
})(MemberListHeader);