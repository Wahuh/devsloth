import React, { Component } from "react";
import DeleteAccount from "../DeleteAccount";
import UpdateEmail from "../UpdateEmail";
import Menu from "../../reuse/Menu";
import MenuItem from "../../reuse/MenuItem";
import Typography from "../../reuse/Typography";
import styles from "./UserSettings.scss";
import UserLogout from "../UserLogout";
import Column from "../../reuse/Column";
import UserAccount from "../UserAccount";

const screens = {
    account: <UserAccount />,
    userDelete: <DeleteAccount />,
    logout: <UserLogout />
}

class UserSettings extends Component {
    state = {
        screen: "account",
        active: {
            account: true,
            email: false,
            userDelete: false,
            logout: false,
        }
    }

    changeScreen(screen) {
        const active = { ...this.state.active };
        Object.keys(active).forEach(k => active[k] = false);
        active[screen] = true;
        this.setState({ screen, active });
    }

    render() {
        const { screen, active } = this.state;
        const { account, email, userDelete, logout } = active;

        return (
            <Column maxHeight maxWidth>
                <Menu>
                    <MenuItem active={active.account} onClick={() => this.changeScreen("account")}>
                        <Typography type="description" color={account ? "secondary" : "primary"}>
                            My Account
                        </Typography>
                    </MenuItem>
        
                    <MenuItem active={active.userDelete} onClick={() => this.changeScreen("userDelete")}>
                        <Typography type="description" color={userDelete ? "secondary" : "primary"}>
                            Delete Account
                        </Typography>
                    </MenuItem>

                    <MenuItem active={active.logout} onClick={() => this.changeScreen("logout")}>
                        <Typography type="description" color={logout ? "secondary" : "primary"}>
                            Logout
                        </Typography>
                    </MenuItem>
                </Menu>

                <Column maxHeight maxWidth>
                    {screens[screen]}
                </Column>
            </Column>
        );
    }
}

export default UserSettings;