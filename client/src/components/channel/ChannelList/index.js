import { connect } from "react-redux";
import { showUiModal } from "../../ui/duck/actions";
import { selectChannel } from "../duck/actions";
import { getAllChannels, getCurrentChannelId } from "../duck/selectors";
import { getCurrentGroupId } from "../../group/duck/selectors";

import React from "react";
import AddButton from "../../reuse/buttons/AddButton";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import Row from "../../reuse/Row";
import Button from "../../reuse/Button";
import SettingsIcon from "../../reuse/icons/SettingsIcon";
import PlusIcon from "../../reuse/icons/PlusIcon";
import Typography from "../../reuse/Typography";
import styles from "./ChannelList.scss";

const ChannelList = ({ channels, onSelect, onShowModal, currentChannel, currentGroupId }) => {
    const channelItems = channels.map(({ _id, name }) => 
        <ListItem 
            key={_id}
            tabIndex
            onClick={() => onSelect({ [currentGroupId]: _id })}
            className={currentChannel === _id ? `${styles.ChannelItem} ${styles.ChannelItemSelected}` : styles.ChannelItem} 
        >
            <Row alignItems="center" className={styles.Wrapper}>
                <div className={styles.ChannelHash}>
                    <Typography color="primary" type="heading">#</Typography>
                </div>
                
                <div className={styles.ChannelName}>
                    <Typography color="primary" type="button">{name}</Typography>
                </div>
            </Row>
            <Button className={styles.SettingsButton} theme="icon">
                <SettingsIcon />
            </Button>
        </ListItem>
    );

    return (
        <List className={styles.ChannelList}>
            <ListItem className={styles.ChannelHeading}>
                <Row alignItems="center">
                    <Typography color="primary" type="heading">Channels</Typography>
                    <AddButton onClick={() => onShowModal("CHANNEL")} />
                </Row>
            </ListItem>
            {channelItems}
        </List>
    );
}

const mapStateToProps = state => ({
    channels: getAllChannels(state),
    currentChannel: getCurrentChannelId(state),
    currentGroupId: getCurrentGroupId(state)
});

export default connect(mapStateToProps, {
    onShowModal: showUiModal,
    onSelect: selectChannel,
})(ChannelList);