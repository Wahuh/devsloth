import { connect } from "react-redux";
import { 
    getSelectedGroup
} from "../duck/selectors";
import { addUiModal } from "../../ui/duck/actions";

import React from "react";
import Button from "../../reuse/Button";
import SettingsIcon from "../../reuse/icons/SettingsIcon";
import Column from "../../reuse/Column";
import Typography from "../../reuse/Typography";
import styles from "./GroupDetails.scss";
import Tooltip from "../../reuse/Tooltip";
import { MODAL_GROUP_SETTINGS } from "../../ui/constants";
import MemberIcon from "../../reuse/icons/MemberIcon";
import Row from "../../reuse/Row";
import Icon from "../../reuse/Icon";

const GroupDetails = ({ group, onShowModal }) => {
    const { name, members } = group;

    return (
        <div className={styles.GroupDetails}>
            <div className={styles.GroupName}>
                <Typography color="secondary" type="subheading">
                    {name}
                </Typography>
            </div>
            
            <div data-tip data-for="GroupSettingsIcon" className={styles.ButtonContainer}>
                <Button onClick={onShowModal} theme="icon">
                    <Icon size="md">
                        <SettingsIcon />
                    </Icon>

                </Button>
                <Tooltip id="GroupSettingsIcon" message="Group Settings" />
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    group: getSelectedGroup(state)
});

export default connect(mapStateToProps, {
    onShowModal: () => addUiModal(MODAL_GROUP_SETTINGS)
})(GroupDetails);