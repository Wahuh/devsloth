import { connect } from "react-redux";
import { removeUiModal } from "../../ui/duck/actions";

import React from "react";
import Modal from "../../reuse/Modal";
import Typography from "../../reuse/Typography";
import styles from "./ConnectionModal.scss";

import { MODAL_CONNECTION } from "../../ui/constants";
import { getConnectedGroups } from "../duck/selectors";

const ConnectionModal = ({ onHide, groups }) => {
    return (
        <Modal id="GROUP_INVITE" onHide={onHide}>
            <div className={styles.ConnectionDetails}>
                {groups.map(
                    ({ name, channels }) => 
                        <details>
                            <summary>
                                <Typography type="subheading" color="secondary">
                                    {name}
                                </Typography>
                            </summary>
                            <ul>
                                {channels.map(channelName => 
                                <li>
                                    <Typography type="button" color="primary">
                                        {channelName} 
                                    </Typography>
                                </li>
                                )}
                            </ul>
                        </details>
                )}
            </div>
        </Modal>
    );
}

const mapStateToProps = state => ({
    groups: getConnectedGroups(state)
});

export default connect(mapStateToProps, {
    onHide: () => removeUiModal(MODAL_CONNECTION),
})(ConnectionModal);