import { connect } from "react-redux";
import { getAllChannels } from "../duck/selectors";

import React from "react";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import Row from "../../reuse/Row";
import Button from "../../reuse/Button";
import PlusIcon from "../../reuse/icons/PlusIcon";
import Typography from "../../reuse/Typography";
import styles from "./ChannelList.scss";


const ChannelList = ({ channels, onSelect, show }) => {
    const channelItems = channels.map(channel => 
        <ListItem className="ChannelItem">
            <Typography marginBottom="0">#{channel.name}</Typography>
        </ListItem>
    );

    return (
        <List className={styles.ChannelList}>
            <ListItem>
                <Row alignItems="center">
                    <Typography marginBottom="0" type="heading">Channels</Typography>
                    <Button className={styles.AddButton}>
                        <PlusIcon />
                    </Button>
                </Row>
            </ListItem>
            {channelItems}
        </List>
    );
}


function selectGroup(event) {
    event.stopPropagation();
    console.log("groupSelected");
}

const mapStateToProps = state => ({
    channels: getAllChannels(state)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);