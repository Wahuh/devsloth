import { connect } from "react-redux";
import { hideUiModal } from "../../ui/duck/actions";

import React from "react";
import ChannelCreateForm from "../../channel/ChannelCreateForm";
import Modal from "../../reuse/Modal";
import styles from "./ChannelModal.scss";

const ChannelModal = ({ onHide }) => (
    <Modal onHide={onHide}>
        <div className={styles.ChannelModal}>
            <ChannelCreateForm />
        </div>
    </Modal>
);


export default connect(null, {
    onHide: hideUiModal
})(ChannelModal);