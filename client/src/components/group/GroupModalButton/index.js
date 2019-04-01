import { connect } from "react-redux";
import { addUiPortal } from "../../ui/duck/actions";

import React from "react";
import Button from "../../reuse/Button";
import PlusIcon from "../../reuse/icons/PlusIcon";
import styles from "./GroupModalButton.scss";
import Tooltip from "../../reuse/Typography/types/Tooltip";
import { MODAL_GROUP_CREATE_OR_JOIN } from "../../ui/constants";

const GroupModalButton = ({ onShowModal }) => (
    <Button onClick={onShowModal} theme="action" className={styles.GroupModalButton}>
        <div data-tip data-for="GroupCreateButton">
            <Tooltip place="right" id="GroupCreateButton" message="Create / Join Group" />
        </div>
        <PlusIcon />
    </Button>
)

export default connect(null, {
    onShowModal: () => addUiPortal({ portalType: MODAL_GROUP_CREATE_OR_JOIN })
})(GroupModalButton);