import { connect } from "react-redux";
import { getSelectedChannelId, getSelectedChannelName } from "../duck/selectors";
import { deleteChannelRequest } from "../duck/actions";

import React, { Component } from "react";
import Button from "../../reuse/Button";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import { getIsFetching } from "../../ui/duck/selectors";
import Typography from "../../reuse/Typography";
import styles from "./ChannelDeleteForm.scss";
import Form from "../../reuse/Form";
import Column from "../../reuse/Column";
import ActionBar from "../../reuse/ActionBar";

class ChannelDeleteForm extends Component {
    handleSubmit = (event) => {
        const { onDelete, channelId } = this.props;
        event.preventDefault();
        onDelete(channelId);
    }

    render() {
        const { channelName, onHide, isFetching } = this.props;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Column paddingX="xl" className={styles.Wrapper}>
                    <Typography margin="lg" color="secondary" type="heading">
                        Delete #{channelName}
                    </Typography>
                </Column>

                <ActionBar>
                    <Button onClick={onHide} theme="outlined" text="Cancel" />
                    <LoadingButton isLoading={isFetching} theme="delete" text="Delete Channel" />
                </ActionBar>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    channelName: getSelectedChannelName(state),
    channelId: getSelectedChannelId(state),
    isFetching: getIsFetching(state, "channelDelete")
});

export default connect(mapStateToProps, {
    onDelete: deleteChannelRequest,
})(ChannelDeleteForm);