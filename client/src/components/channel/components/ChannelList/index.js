import React from "react";
import "./ChannelList.scss";
import List from "../../../reuse/List";
import ListItem from "../../../reuse/ListItem";
import Row from "../../../reuse/Row";
import Button from "../../../reuse/Button";
import PlusIcon from "../../../reuse/icons/PlusIcon";
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
                <Row alignItems="center">
                    <Typography type="subtitle2">Channels</Typography>
                    <Button className="AddButton">
                        <PlusIcon />
                    </Button>
                </Row>
            </ListItem>
            {channelItems}
        </List>
    );
}

export default ChannelList;