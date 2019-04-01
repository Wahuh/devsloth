import { connect } from "react-redux";
import { addUiPortal } from "../../ui/duck/actions";
import { getOwnerId } from "../../group/duck/selectors";
import { getUserId } from "../../user/duck/selectors";

import React from "react";
import AddButton from "../../reuse/buttons/AddButton";
import styles from "./ChannelListHeader.scss";
import Typography from "../../reuse/Typography";
import Tooltip from "../../reuse/Tooltip";
import { MODAL_CHANNEL_CREATE } from "../../ui/constants";

const ChannelListHeader = ({ onShowModal, isOwner}) => (
    <div className={styles.ChannelListHeader}>
        <Typography color="primary" type="subheading">Channels</Typography>
        {isOwner && <div className={styles.ButtonContainer} data-tip data-for="ChannelCreateButton">
        <AddButton onClick={onShowModal} />
            <Tooltip id="ChannelCreateButton" message="Create Channel" />
        </div>}
    </div>
);

const mapStateToProps = state => ({
    isOwner: getOwnerId(state) === getUserId(state),
});

export default connect(mapStateToProps, {
    onShowModal: () => addUiPortal({ portalType: MODAL_CHANNEL_CREATE }),
})(ChannelListHeader);