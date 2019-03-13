import { connect } from "react-redux";
import { addUiModal } from "../../ui/duck/actions";
import { MODAL_CHANNEL_SETTINGS } from "../../ui/constants";

import React, { Fragment } from "react";
import Typography from "../../reuse/Typography";
import Row from "../../reuse/Row";
import EditIcon from "../../reuse/icons/EditIcon";
import Icon from "../../reuse/Icon";
import Button from "../../reuse/Button";
import { getSelectedChannelTopic } from "../duck/selectors";
import styles from "./ChannelTopic.scss";

const ChannelTopic = ({ topic, onShowModal }) => (
    <div className={styles.ChannelTopic}>
        <Button onClick={onShowModal} className={styles.TopicButton}>
            {topic ? (
                <Typography type="description" color="primary">
                    {topic}
                </Typography>
                ) : (
                    <Fragment>
                        <Icon size="xs">
                            <EditIcon />
                        </Icon>
                        <Typography type="description" color="primary">
                            Add a topic
                        </Typography>
                    </Fragment>
                )
            }
        </Button>

        <Button className={styles.EditButton}>
            <Typography type="description" color="primary">
                Edit
            </Typography>
        </Button>
    </div>

);

const mapStateToProps = state => ({
    topic: getSelectedChannelTopic(state)
});

export default connect(mapStateToProps, {
    onShowModal: () => addUiModal(MODAL_CHANNEL_SETTINGS)
})(ChannelTopic);