import { connect } from "react-redux";
import { 
    getCurrentGroupName, 
    getCurrentGroupMemberCount 
} from "../duck/selectors";
import { showUiModal } from "../../ui/duck/actions";

import React from "react";
import Button from "../../reuse/Button";
import SettingsIcon from "../../reuse/icons/SettingsIcon";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import styles from "./GroupDetails.scss";

const GroupDetails = ({ name, membersCount, onShowModal }) => (
    <div className={styles.GroupDetails}>
        <Column className={styles.Wrapper}>
            <div className={styles.GroupName}>
                <Typography textAlign="left" type="heading" fontWeight="700">
                    {name}
                </Typography>

            </div>

            <Typography type="button" color="primary">
                {`${membersCount} ${membersCount !== 1 ? "members" : "member"}`}
            </Typography>
        </Column>
        <div className={styles.ButtonContainer}>
            <Button onClick={onShowModal} theme="icon">
                <SettingsIcon />
            </Button>
        </div>
    </div>
);

const mapStateToProps = state => ({
    name: getCurrentGroupName(state),
    membersCount: getCurrentGroupMemberCount(state)
});

export default connect(mapStateToProps, {
    onShowModal: () => showUiModal("GROUP_SETTINGS")
})(GroupDetails);