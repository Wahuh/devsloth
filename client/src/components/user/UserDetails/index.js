import { connect } from "react-redux";
import { getUsername } from "../duck/selectors";
import { addUiModal } from "../../ui/duck/actions";
import { MODAL_USER_SETTINGS } from "../../ui/constants";

import React from "react";
import ConnectionIndicator from "../../socket/ConnectionIndicator";

import Button from "../../reuse/Button";
import SettingsIcon from "../../reuse/icons/SettingsIcon";
import Tooltip from "../../reuse/Tooltip";
import Typography from "../../reuse/Typography";

import styles from "./UserDetails.scss";

const UserDetails = ({ username, onShowModal }) => (
    <div className={styles.UserDetails}>
        <div className={styles.UserIcon}></div>

        <div className={styles.User}>
            <div className={styles.Username}>
                <Typography color="secondary">
                    {username}
                </Typography>
            </div>

            <ConnectionIndicator />
        </div>

        <div className={styles.SettingsButton} data-tip data-for="UserSettingsButton">
            <Button theme="icon" onClick={onShowModal}>
                <SettingsIcon />
            </Button>

            <Tooltip id="UserSettingsButton" message="User Settings" />
        </div>
    </div>
);

const mapStateToProps = state => ({
    username: getUsername(state),
});

export default connect(mapStateToProps, {
    onShowModal: () => addUiModal(MODAL_USER_SETTINGS)
})(UserDetails);