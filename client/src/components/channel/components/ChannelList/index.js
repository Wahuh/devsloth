import React from "react";
import "./ChannelList.scss";
import List from "../../../reuse/List";
import ListItem from "../../../reuse/ListItem";
import Typography from "../../../reuse/Typography";

const ChannelList = ({ channels, onSelect, show }) => {
    const channelItems = channels.map(channel => 
        <ListItem className="ChannelItem">
            <Typography>#{channel.name}</Typography>
        </ListItem>
    );

    return (
        <List className="ChannelList">
            <ListItem>
                <Typography type="subtitle2">Channels</Typography>
            </ListItem>
            {channelItems}
        </List>
    );
}

export default ChannelList;