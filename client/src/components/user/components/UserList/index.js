import React from "react";
import List from "../../../reuse/List";
import ListItem from "../../../reuse/ListItem";
import Typography from "../../../reuse/Typography";
import "./UserList.scss";

const UserList = ({user}) => {
    let users = [
        {name: "Gabe Newell"},
        {name: "Gabe Newell"},
        {name: "Gabe Newell"},
        {name: "Gabe Newell"},
        {name: "Gabe Newell"},
        {name: "Gabe Newell"},
    ]
    const userItems = users.map(user => <ListItem><Typography>{user.name}</Typography></ListItem>); 

    return (
        <List className="UserList">
            <ListItem><Typography type="subtitle2">Members</Typography></ListItem>
            {userItems}
        </List>
    );
}

export default UserList;