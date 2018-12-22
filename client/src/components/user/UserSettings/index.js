import React, { Component } from "react";
import Container from "../../reuse/Container";
import ChangeUsername from "../ChangeUsername";
import DeleteAccount from "../DeleteAccount";
import UpdateEmail from "../UpdateEmail";
import Menu from "../../reuse/Menu";
import MenuItem from "../../reuse/MenuItem";
import Typography from "../../reuse/Typography";
import styles from "./UserSettings.scss";

const screens = {
    username: <ChangeUsername />,
    email: <UpdateEmail />,
    delete: <DeleteAccount />,
}

class UserSettings extends Component {
    state = {
        screen: "username",
        active: {
            username: true,
            email: false,
            delete: false
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

        return (
            <div className={styles.UserSettings}>
                <div className={styles.MenuContainer}>
                    <Menu>
                        <MenuItem active={active.username} onClick={() => this.changeScreen("username")}>
                            <Typography type="button" color={active.username ? "secondary" : "tertiary"}>
                                Change Username
                            </Typography>
                        </MenuItem>
            
                        <MenuItem active={active.email} onClick={() => this.changeScreen("email")}> 
                            <Typography type="button" color={active.email ? "secondary" : "tertiary"}>
                                Update Email
                            </Typography>
                        </MenuItem>
            
                        <MenuItem active={active.delete} onClick={() => this.changeScreen("delete")}>
                            <Typography type="button" color={active.delete ? "secondary" : "tertiary"}>
                                Delete Account
                            </Typography>
                        </MenuItem>
                    </Menu>
                </div>

                <Container>
                    {screens[screen]}
                </Container>
            </div>
        );
    }
}

export default UserSettings;