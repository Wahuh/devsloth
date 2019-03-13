import { connect } from "react-redux";
import { selectChannel } from "../duck/actions";
import classNames from "classnames";

import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import ListItem from "../../reuse/ListItem";
import Button from "../../reuse/Button";
import styles from "./Channel.scss";
import { getOwnerId } from "../../group/duck/selectors";
import { getChannel, getSelectedChannelId } from "../duck/selectors";
import { getUserId } from "../../user/duck/selectors";
import { addUiModal } from "../../ui/duck/actions";
import { MODAL_CHANNEL_SETTINGS, MODAL_CHANNEL_INVITE } from "../../ui/constants";
import SettingsIcon from "../../reuse/icons/SettingsIcon";
import Tooltip from "../../reuse/Tooltip";
import Typography from "../../reuse/Typography";
import LockIcon from "../../reuse/icons/LockIcon";
import { getMemberUser } from "../../members/duck/selectors";
import InviteIcon from "../../reuse/icons/InviteIcon";

const Channel = ({ channel, onSelect, isSelected, isOwner, onShowModal, isUserInChannel, onShowInviteModal, match }) => {
    const { name, isPublic } = channel;
    return (
        isUserInChannel ? (
            <ListItem>
            <NavLink onClick={
                    event => {
                        event.preventDefault();
                        onSelect(); 
                    }} className={styles.Channel} activeClassName={styles.Selected} to={`${match.url}/@${name}`}>
                <div className={styles.Wrapper}>
                    {isPublic ? (
                    <div className={styles.ChannelHash}>
                        <Typography type="subheading">#</Typography>
                    </div>
                    ) : (
                    <div className={styles.ChannelLock}>
                        <LockIcon />
                    </div>
                    )}

                    
                    <div className={styles.ChannelName}>
                        <Typography color="primary">{name}</Typography>
                    </div>
                </div>
                {isSelected && 
                    <div className={styles.ButtonContainer} data-tip data-for="ChannelInviteIcon">
                        <Button onClick={onShowInviteModal} className={styles.IconButton} theme="icon">
                            <InviteIcon />
                        </Button>

                        <Tooltip
                        id="ChannelInviteIcon" 
                        message="Create Instant Invite" 
                        place="top"
                    /> 
                    </div>
                }

                {isOwner && <div className={styles.ButtonContainer} data-tip data-for="ChannelSettingsIcon">
                    <Button onClick={onShowModal} className={classNames(styles.IconButton, { [styles.Hidden]: !isSelected })} theme="icon">
                        <SettingsIcon />
                    </Button>
                    <Tooltip
                        id="ChannelSettingsIcon" 
                        message="Channel Settings" 
                        place="top"
                    /> 
                </div>}
            </NavLink>


            </ListItem>
        ) : null
    );
};

const mapStateToProps = (state, ownProps) => ({
    channel: getChannel(state, ownProps._id),
    isSelected: getSelectedChannelId(state) === ownProps._id,
    isOwner: getOwnerId(state) === getUserId(state),
    isUserInChannel: getMemberUser(state, ownProps._id).channels.includes(ownProps._id)
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSelect: () => dispatch(selectChannel({ [ownProps.groupId]: ownProps._id })),
        onShowModal: () => dispatch(addUiModal(MODAL_CHANNEL_SETTINGS)),
        onShowInviteModal: () => dispatch(addUiModal(MODAL_CHANNEL_INVITE)) 
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Channel)
);