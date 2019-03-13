import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "../../reuse/Typography";
import styles from "./HomeMenu.scss";
import Icon from "../../reuse/Icon";
import MailIcon from "../../reuse/icons/MailIcon";
import TaskIcon from "../../reuse/icons/TaskIcon";
import HomeIcon from "../../reuse/icons/HomeIcon";

const HomeMenu = ({ match }) => (
    <nav className={styles.HomeMenu}>
        <div className={styles.SlackerBrand}>
            <Typography type="heading" color="secondary">
                Slacker.io
            </Typography>
        </div>

        <NavLink exact to={`${match.path}`} className={styles.HomeLink} activeClassName={styles.Active}>
            <Icon marginRight="sm" size="md">
                <HomeIcon />
            </Icon>

            <Typography type="body" color="primary">
                Me
            </Typography>
        </NavLink>

        <NavLink to={`${match.path}/tasks`} className={styles.HomeLink} activeClassName={styles.Active}>
            <Icon marginRight="sm" size="md">
                <TaskIcon />
            </Icon>

            <Typography type="body" color="primary">
                Tasks
            </Typography>
        </NavLink>

        <NavLink to={`${match.path}/invites`} className={styles.HomeLink} activeClassName={styles.Active}>
            <Icon marginRight="sm" size="md">
                <MailIcon />
            </Icon>

            <Typography type="body" color="primary">
                Invites
            </Typography>
        </NavLink>
    </nav>
)

export default HomeMenu;