import { connect } from "react-redux";
import { getCurrentChannelName, getSelectedChannelId } from "../duck/selectors";
import { deleteChannelRequest } from "../duck/actions";

import React, { Component } from "react";
import Button from "../../reuse/Button";
import Typography from "../../reuse/Typography";
import styles from "./ChannelDeleteForm.scss";
import Form from "../../reuse/Form";
import Column from "../../reuse/Column";
import ActionBar from "../../reuse/ActionBar";
import CancelButton from "../../reuse/buttons/CancelButton";
import { removeUiModal } from "../../ui/duck/actions";
import { MODAL_CHANNEL_SETTINGS } from "../../ui/constants";

class ChannelDeleteForm extends Component {
    handleSubmit = (event) => {
        const { onDelete, channelId } = this.props;
        event.preventDefault();
        onDelete(channelId);
    }

    render() {
        const { channelName, onHide } = this.props;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Column paddingX="xl" className={styles.Wrapper}>
                    <Typography margin="lg" color="secondary" type="heading">
                        Delete #{channelName}
                    </Typography>
                </Column>

                <ActionBar>
                    <CancelButton onClick={onHide} />
                    <Button theme="delete" text="Delete Channel" />
                </ActionBar>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    channelName: getCurrentChannelName(state),
    channelId: getSelectedChannelId(state)
});

export default connect(mapStateToProps, {
    onDelete: deleteChannelRequest,
    onHide: () => removeUiModal(MODAL_CHANNEL_SETTINGS)
})(ChannelDeleteForm);