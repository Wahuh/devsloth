import { connect } from "react-redux";
import { addUiPortal } from "../../ui/duck/actions";
import { getUsername } from "../../user/duck/selectors";

import React from "react";
import GroupIcon from "../../reuse/icons/GroupIcon";
import Typography from "../../reuse/Typography";
import Button from "../../reuse/Button";
import styles from "./GroupEmpty.scss";
import { MODAL_GROUP_CREATE_OR_JOIN } from "../../ui/constants";
import { joinGroupRequest } from "../duck/actions";

const GroupEmpty = ({ onCreate, username, onJoin }) => (
    <div className={styles.GroupEmpty}>
        <Typography margin="lg" type="heading" color="secondary">
            Welcome to Slacker.io, {username}!
        </Typography>

        <div className={styles.Action}>
            <GroupIcon />

            <Typography type="subheading" margin="md" color="primary">
                You don't have any groups yet
            </Typography>

            <Typography type="body" margin="lg" color="tertiary">
                Join the Global group and chat with everyone using Slacker.io
            </Typography>

            <Button onClick={onJoin} size="md" theme="action" text="Join Global" />

            <Button onClick={onCreate} theme="outlined" text="Create your own group" />
        </div>
    </div>
);

const mapStateToProps = state => ({
    username: getUsername(state)
});

export default connect(mapStateToProps, {
    onCreate: () => addUiPortal({ portalType: MODAL_GROUP_CREATE_OR_JOIN }),
    onJoin: () => joinGroupRequest("global")
})(GroupEmpty);