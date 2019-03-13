import React from "react";
import Button from "../../reuse/Button";
import PaletteIcon from "../../reuse/icons/PaletteIcon";
import styles from "./ThemeSwitcher.scss";
import Tooltip from "../../reuse/Tooltip";
import Icon from "../../reuse/Icon";
import themeApi from "../../../api/themeApi";

const ThemeSwitcher = () => (
    <div data-tip data-for="ThemeSwitcher" className={styles.ThemeSwitcher}>
        <Button 
            theme="icon" 
            onClick={() => themeApi.changeTheme() }>
            <Icon size="lg">
                <PaletteIcon />
            </Icon>
        </Button>
        <Tooltip place="left" id="ThemeSwitcher" message="Change Theme" />
    </div>
)

export default ThemeSwitcher;