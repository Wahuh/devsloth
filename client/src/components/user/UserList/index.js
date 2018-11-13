import React from "react";
import List from "../../reuse/List";
import ListItem from "../../reuse/ListItem";
import Typography from "../../reuse/Typography";
import styles from "./UserList.scss";

const UserList = ({user}) => {
    let users = [
        {name: "Gabe Newell the greatest Gabe Newell the greatest Gabe Newell the greatest"},
        {name: "Gabe Newell"},
        {name: "Gabe Newell"},
        {name: "Gabe Newell"},
        {name: "Gabe Newell"},
        {name: "Gabe Newell"},
    ]
    const userItems = users.map(user => <ListItem><Typography overflow marginBottom="0">{user.name}</Typography></ListItem>); 

    return (
        <List className={styles.UserList}>
            <ListItem><Typography marginBottom="0" type="heading">Members</Typography></ListItem>
            {userItems}
        </List>
    );
}

export default UserList;