import { connect } from "react-redux";
import React from "react";
import styles from "./ConnectionIndicator.scss";
import Typography from "../../reuse/Typography";
import { addUiPortal } from "../../ui/duck/actions";
import { MODAL_CONNECTION } from "../../ui/constants";
import Tooltip from "../../reuse/Tooltip";
import { getConnectionStatus } from "../duck/selectors";

const indicators = {
    connected: styles.Connected,
    connecting: styles.Connecting,
    disconnected: styles.Disconnected,
}

const messages = {
    connected: "Connected",
    connecting: "Connecting",
    disconnected: "Disconnected"
}

const ConnectionIndicator = ({ onShowModal, status }) => (
    <div data-tip data-for="ConnectionIndicator" onClick={onShowModal} className={styles.ConnectionIndicator}>
        <div className={`${styles.Status} ${indicators[status]}`}></div>
        <Typography color="primary" type="caption">
            {messages[status]}
        </Typography>
        <Tooltip id="ConnectionIndicator" message="Connection Details" />
    </div>
);

const mapStateToProps = state => ({
    status: getConnectionStatus(state)
});

export default connect(mapStateToProps, {
    onShowModal: () => addUiPortal({ portalType: MODAL_CONNECTION })
})(ConnectionIndicator);