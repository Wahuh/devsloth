import { connect } from "react-redux";
import { selectGroup } from "../../group/duck/actions";

import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../reuse/icons/HomeIcon";
import styles from "./HomeButton.scss";
import Tooltip from "../../reuse/Tooltip";


const HomeButton = ({ onSelect }) => (
    <div className={styles.Wrapper}>
        <div data-tip data-for="HomeButton">
            <NavLink 
                onClick={onSelect} 
                exact 
                className={styles.HomeButton} 
                to="/@me" 
                activeClassName={styles.Active}
                isActive={(match, location) => location.pathname.startsWith("/@me")}
            >
                <HomeIcon />
            </NavLink>
            <Tooltip place="right" id="HomeButton" message="Home" />
        </div>
    </div>
);

export default connect(null, {
    onSelect: () => selectGroup(null)
})(HomeButton);