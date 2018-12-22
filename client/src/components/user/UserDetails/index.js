import { connect } from "react-redux";
import { getUsername } from "../../auth/duck/selectors"
import { showUiModal } from "../../ui/duck/actions";

import React from "react";
import Typography from "../../reuse/Typography";
import Button from "../../reuse/Button";
import Row from "../../reuse/Row";
import Column from "../../reuse/Column";
import SettingsIcon from "../../reuse/icons/SettingsIcon";
import styles from "./UserDetails.scss";

const UserDetails = ({ username, onShowModal }) => (
    <div className={styles.UserDetails}>
        <Row className={styles.User}>
            <div className={styles.UserIcon}></div>
            <Column>
                <Typography color="secondary" type="button">
                    {username}
                </Typography>

                <Row alignItems="center">
                    <div className={styles.Connected}></div>
                    <Typography color="primary" type="caption">
                        Online
                    </Typography>
                </Row>
            </Column>
        </Row>

        <Button theme="icon" onClick={() => onShowModal("USER")}>
            <SettingsIcon />
        </Button>
    </div>
);

const mapStateToProps = state => ({
    username: getUsername(state),
});

export default connect(mapStateToProps, {
    onShowModal: showUiModal
})(UserDetails);